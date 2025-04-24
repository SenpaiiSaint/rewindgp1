'use client';

import { useState, useEffect, Suspense } from 'react';
import { Race } from '../types/race';
import RaceCard from '../components/RaceCard';
import { useSearchParams, useRouter } from 'next/navigation';

function RacesContent() {
  const [races, setRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [status, setStatus] = useState<string>('');
  const [search, setSearch] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          sortBy,
          sortOrder,
          ...(status && { status }),
          ...(search && { search }),
        });

        const response = await fetch(`/api/races?${params}`);
        if (!response.ok) throw new Error('Failed to fetch races');
        
        const data = await response.json();
        setRaces(data.races);
        setTotal(data.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRaces();
  }, [page, limit, sortBy, sortOrder, status, search]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const handleSort = (field: string) => {
    const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(field);
    setSortOrder(newOrder);
    setPage(1);
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search races..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded border p-2"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded border p-2"
          >
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="rounded border p-2"
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="country">Country</option>
          </select>
          <button
            onClick={() => handleSort(sortBy)}
            className="rounded border p-2"
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {races.map((race) => (
          <RaceCard key={race.id} race={race} />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(total / limit) }, (_, i) => i + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`rounded border p-2 ${
                page === pageNum ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {pageNum}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default function RacesPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <RacesContent />
    </Suspense>
  );
} 