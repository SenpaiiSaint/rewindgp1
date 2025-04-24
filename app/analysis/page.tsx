'use client';

import { useState, useEffect, Suspense, useMemo } from 'react';
import { StrategyAnalysis } from '../types/strategy';
import { useSearchParams, useRouter } from 'next/navigation';
import { mockStrategies } from '../data/mockStrategies';
import { mockRaces, mockTeams, mockCompounds, type Driver } from '../data/mockData';

function AnalysisContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [analysis, setAnalysis] = useState<StrategyAnalysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [selectedRace, setSelectedRace] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [selectedDriver, setSelectedDriver] = useState<string>('');
  const [selectedCompound, setSelectedCompound] = useState<string>('');
  const [availableDrivers, setAvailableDrivers] = useState<Driver[]>([]);

  // Memoize all data to prevent unnecessary recalculations
  const allDrivers = useMemo(() => mockTeams.flatMap(team => team.drivers), []);
  const strategies = useMemo(() => [...mockStrategies], []);

  // Initialize available drivers
  useEffect(() => {
    setAvailableDrivers(allDrivers);
  }, [allDrivers]);

  // Update available drivers when team selection changes
  useEffect(() => {
    if (selectedTeam) {
      const team = mockTeams.find(t => t.id === selectedTeam);
      const teamDrivers = team?.drivers || [];
      setAvailableDrivers(teamDrivers);
      
      if (!teamDrivers.some(d => d.id === selectedDriver)) {
        setSelectedDriver('');
      }
    } else {
      setAvailableDrivers(allDrivers);
    }
  }, [selectedTeam, allDrivers, selectedDriver]);

  // Fetch analysis data
  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let filtered = [...strategies];
        if (selectedRace) filtered = filtered.filter(s => s.raceId === selectedRace);
        if (selectedTeam) filtered = filtered.filter(s => s.teamId === selectedTeam);
        if (selectedDriver) filtered = filtered.filter(s => s.driverId === selectedDriver);
        if (selectedCompound) {
          filtered = filtered.filter(s => 
            s.strategy.some(stint => stint.compound === selectedCompound)
          );
        }

        setAnalysis(filtered);
        setError(null);
      } catch (err) {
        setError('Failed to fetch analysis data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [selectedRace, selectedTeam, selectedDriver, selectedCompound, strategies]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`/analysis?${params.toString()}`);
  };

  // Helper function to get race name
  const getRaceName = (raceId: string) => {
    return mockRaces.find(r => r.id === raceId)?.name || raceId;
  };

  // Helper function to get team name and color
  const getTeamInfo = (teamId: string) => {
    const team = mockTeams.find(t => t.id === teamId);
    return {
      name: team?.name || teamId,
      color: team?.color || '#000000'
    };
  };

  // Helper function to get driver name and number
  const getDriverInfo = (driverId: string) => {
    const driver = allDrivers.find(d => d.id === driverId);
    return {
      name: driver?.name || driverId,
      number: driver?.number || 0
    };
  };

  // Helper function to get compound color
  const getCompoundColor = (compound: string) => {
    return mockCompounds.find(c => c.id === compound)?.color || '#000000';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Strategy Analysis</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2">Race</label>
            <select
              value={selectedRace}
              onChange={(e) => setSelectedRace(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Races</option>
              {mockRaces.map(race => (
                <option key={race.id} value={race.id}>
                  {race.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Team</label>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Teams</option>
              {mockTeams.map(team => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Driver</label>
            <select
              value={selectedDriver}
              onChange={(e) => setSelectedDriver(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Drivers</option>
              {availableDrivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  #{driver.number} {driver.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tire Compound</label>
            <select
              value={selectedCompound}
              onChange={(e) => setSelectedCompound(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Compounds</option>
              {mockCompounds.map(compound => (
                <option key={compound.id} value={compound.id}>
                  {compound.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-900 text-white p-4 rounded mb-4">
            {error}
          </div>
        )}

        {/* Analysis Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analysis.map((strategy) => {
              const teamInfo = getTeamInfo(strategy.teamId);
              const driverInfo = getDriverInfo(strategy.driverId);
              
              return (
                <div
                  key={strategy.id}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                >
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {getRaceName(strategy.raceId)}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: teamInfo.color }}
                      />
                      <span className="font-medium">{teamInfo.name}</span>
                    </div>
                    <div className="text-gray-400">
                      #{driverInfo.number} {driverInfo.name}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Total Time:</span>
                      <span className="font-mono">{strategy.totalTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Position Change:</span>
                      <span className={strategy.positionGain > 0 ? 'text-green-400' : strategy.positionGain < 0 ? 'text-red-400' : ''}>
                        {strategy.positionGain > 0 ? '+' : ''}{strategy.positionGain}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Strategy:</h3>
                    {strategy.strategy.map((stint, index) => {
                      const backgroundColor = getCompoundColor(stint.compound);
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 rounded"
                          style={{ 
                            backgroundColor,
                            color: '#000000'
                          }}
                        >
                          <span className="text-sm font-medium">Stint {stint.stint}</span>
                          <span className="text-sm">
                            Laps {stint.startLap}-{stint.endLap}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {strategy.notes && (
                    <div className="mt-4 text-sm text-gray-400">
                      {strategy.notes}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {!loading && !error && analysis.length > 0 && (
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(analysis.length / 10) }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 rounded ${
                      page === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* No Results */}
        {!loading && !error && analysis.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No strategies found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AnalysisPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnalysisContent />
    </Suspense>
  );
}