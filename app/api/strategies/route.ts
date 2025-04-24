import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import type { StrategyAnalysis, StrategyResponse } from "@/app/types/strategy";

// ISR: cache GET at edge for 30 seconds
export const dynamic = 'force-static';
export const revalidate = 30;

// Zod Schemas for query params
const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).default(10),
});

const FilterSchema = z.object({
  raceId: z.string().optional(),
  teamId: z.string().optional(),
  driverId: z.string().optional(),
  compound: z.enum(['soft', 'medium', 'hard', 'intermediate', 'wet']).optional(),
});

const QuerySchema = PaginationSchema.merge(FilterSchema);

// Zod Schema for POST body
const StrategyCreateSchema = z.object({
  raceId: z.string().min(1),
  teamId: z.string().min(1),
  driverId: z.string().min(1),
  strategy: z.array(z.object({
    stint: z.number().int().min(1),
    compound: z.enum(['soft', 'medium', 'hard', 'intermediate', 'wet']),
    laps: z.number().int().min(1),
    startLap: z.number().int().min(1),
    endLap: z.number().int().min(1),
    avgLapTime: z.string(),
    degradation: z.number().min(0).max(100),
  })),
  totalTime: z.string(),
  positionGain: z.number().int(),
  notes: z.string().optional(),
});

// GET: /api/strategies
export async function GET(request: NextRequest) {
  try {
    const params = Object.fromEntries(request.nextUrl.searchParams);
    const {
      page,
      limit,
      raceId,
      teamId,
      driverId,
      compound,
    } = QuerySchema.parse(params);

    // TODO: Replace with actual database query
    const strategies: StrategyAnalysis[] = [];
    
    // Apply filters
    let filtered = strategies;
    if (raceId) filtered = filtered.filter(s => s.raceId === raceId);
    if (teamId) filtered = filtered.filter(s => s.teamId === teamId);
    if (driverId) filtered = filtered.filter(s => s.driverId === driverId);
    if (compound) {
      filtered = filtered.filter(s => 
        s.strategy.some(stint => stint.compound === compound)
      );
    }

    // Pagination
    const total = filtered.length;
    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    const response: StrategyResponse = {
      analysis: data,
      total,
      page,
      limit,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('GET /api/strategies error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map(e => e.message).join(', ') }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST: /api/strategies
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = StrategyCreateSchema.parse(body);

    const newStrategy: StrategyAnalysis = {
      id: Date.now().toString(),
      ...payload,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // TODO: Replace with actual database insert
    // strategies.push(newStrategy);

    return NextResponse.json(newStrategy, { status: 201 });
  } catch (error) {
    console.error('POST /api/strategies error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map(e => e.message).join(', ') }, { status: 422 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 