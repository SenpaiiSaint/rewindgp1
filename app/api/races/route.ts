import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { races } from "@/app/data/races";
import type { Race, RaceResponse } from "@/app/types/race";

// ISR: cache GET at edge for 30 seconds
export const dynamic = 'force-static';
export const revalidate = 30;

// Zod Scehmas for query params
const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).default(10),
});
const SortSchema = z.object({
  sortBy: z.enum(['date', 'name', 'country']).default('date'),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
});
const FilterSchema = z.object({
  status: z.enum(['upcoming', 'completed', 'in-progress', 'cancelled']).optional(),
  country: z.string().min(1).optional(),
  circuit: z.string().min(1).optional(),
  search: z.string().optional(),
});
const QuerySchema = PaginationSchema.merge(SortSchema).merge(FilterSchema);

// Zod Schema for POST body
const RaceCreateSchema = z.object({
  name: z.string().min(1),
  circuit: z.string().min(1),
  country: z.string().min(1),
  date: z.string().refine((d) => !isNaN(Date.parse(d)), { message: 'Invalid date format'}),
  status: z.enum(['upcoming', 'completed', 'in-progress', 'cancelled']).default('upcoming'),
  sessions: z.array(z.any()).optional(),
  results: z.array(z.any()).optional(),
  countryCode: z.string().optional(),
  circuitImage: z.string().optional(),
  countryFlag: z.string().optional(),
  description: z.string().optional(),
  trackLength: z.string().optional(),
  laps: z.coerce.number().int().nonnegative().optional(),
  lapRecord: z.object({
    driver: z.string(),
    time: z.string(),
    year: z.number()
  }).optional(), 
});

// Helper: Sort Races
function sortRaces(list: Race[], sortBy: string, sortOrder: 'asc' | 'desc'): Race[] {
  return [...list].sort((a,b) => {
    let cmp = 0;
    if (sortBy === 'date') {
      cmp = new Date(a.date).getTime() - new Date(b.date).getTime();
          } else {
            cmp = String(a[sortBy as keyof Race]).localeCompare(String(b[sortBy as keyof Race]));
          }
          return sortOrder === 'desc' ? -cmp : cmp;
  });
}

// GET: /api/races
export async function GET(request: NextRequest) {
  try {
    const params = Object.fromEntries(request.nextUrl.searchParams);
    const {
      page,
      limit,
      sortBy,
      sortOrder,
      status,
      country,
      search,
    } = QuerySchema.parse(params);
    // Apply Filters
    let filtered = races;
    if (status) filtered = filtered.filter((r) => r.status === status);
    if (country) filtered = filtered.filter((r) => r.country.toLowerCase().includes(country.toLowerCase()));
    if (search) {
      const term = search.toLowerCase();
      filtered = filtered.filter((r) =>
      r.name.toLowerCase().includes(term) ||
      r.circuit.toLowerCase().includes(term) ||
      r.country.toLowerCase().includes(term)
      );
    }
    // Sort
    const sorted = sortRaces(filtered, sortBy, sortOrder);
    // Pagination
    const total = sorted.length;
    const start = (page - 1) * limit;
    const data = sorted.slice(start, start + limit);

    const response: RaceResponse = {
      races: data,
      total,
      page,
      limit,
      season: new Date().getFullYear(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('GET /api/races error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map(e => e.message).join(', ') }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST: /api/races
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = RaceCreateSchema.parse(body);

    const newRace: Race = {
      id: Date.now().toString(),
      name: payload.name,
      circuit: payload.circuit,
      country: payload.country,
      countryCode: payload.countryCode || '',
      date: payload.date,
      status: payload.status,
      sessions: payload.sessions || [],
      results: payload.results || [],
      circuitImage: payload.circuitImage || '/circuits/default.jpg',
      countryFlag: payload.countryFlag || '/flags/default.svg',
      description: payload.description || '',
      trackLength: payload.trackLength || '',
      laps: payload.laps ?? 0,
      lapRecord: payload.lapRecord,
    };

    races.push(newRace);
    return NextResponse.json(newRace, { status: 201 });
  } catch (error) {
    console.error('POST /api/races error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map(e => e.message).join(', ') }, { status: 422 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
