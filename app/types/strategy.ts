export interface StrategyAnalysis {
  id: string;
  raceId: string;
  teamId: string;
  driverId: string;
  strategy: {
    stint: number;
    compound: 'soft' | 'medium' | 'hard' | 'intermediate' | 'wet';
    laps: number;
    startLap: number;
    endLap: number;
    avgLapTime: string;
    degradation: number;
  }[];
  totalTime: string;
  positionGain: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrategyResponse {
  analysis: StrategyAnalysis[];
  total: number;
  page: number;
  limit: number;
} 