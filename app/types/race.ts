export interface RaceSession {
  date: string;
  time: string;
  type: 'practice1' | 'practice2' | 'practice3' | 'qualifying' | 'sprint' | 'race';
}

export interface RaceResult {
  position: number;
  number: number;
  driver: string;
  team: string;
  laps: number;
  time: string;
  points: number;
  fastestLap?: boolean;
  status: string;
}

export interface Race {
  id: string;
  name: string;
  circuit: string;
  country: string;
  countryCode: string;
  date: string;
  status: 'upcoming' | 'completed' | 'in-progress' | 'cancelled';
  sessions: RaceSession[];
  results?: RaceResult[];
  circuitImage: string;
  countryFlag: string;
  description: string;
  trackLength: string;
  laps: number;
  lapRecord?: {
    driver: string;
    time: string;
    year: number;
  };
}

export interface RaceResponse {
  races: Race[];
  total: number;
  page: number;
  limit: number;
  season: number;
} 