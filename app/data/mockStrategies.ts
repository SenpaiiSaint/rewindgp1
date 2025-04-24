import { StrategyAnalysis } from '../types/strategy';

export const mockStrategies: StrategyAnalysis[] = [
  {
    id: '1',
    raceId: 'monaco-2024',
    teamId: 'red-bull',
    driverId: 'max-verstappen',
    strategy: [
      {
        stint: 1,
        compound: 'medium',
        laps: 25,
        startLap: 1,
        endLap: 25,
        avgLapTime: '1:15.234',
        degradation: 0.2
      },
      {
        stint: 2,
        compound: 'hard',
        laps: 33,
        startLap: 26,
        endLap: 58,
        avgLapTime: '1:16.456',
        degradation: 0.1
      }
    ],
    totalTime: '1:45:23.456',
    positionGain: 2,
    notes: 'Strong pace on mediums, managed hard tires well in final stint',
    createdAt: '2024-05-26T14:30:00Z',
    updatedAt: '2024-05-26T14:30:00Z'
  },
  {
    id: '2',
    raceId: 'monaco-2024',
    teamId: 'ferrari',
    driverId: 'charles-leclerc',
    strategy: [
      {
        stint: 1,
        compound: 'soft',
        laps: 20,
        startLap: 1,
        endLap: 20,
        avgLapTime: '1:14.789',
        degradation: 0.3
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 38,
        startLap: 21,
        endLap: 58,
        avgLapTime: '1:15.123',
        degradation: 0.2
      }
    ],
    totalTime: '1:45:45.789',
    positionGain: -1,
    notes: 'Aggressive start on softs, struggled with tire management in final stint',
    createdAt: '2024-05-26T14:30:00Z',
    updatedAt: '2024-05-26T14:30:00Z'
  },
  {
    id: '3',
    raceId: 'monaco-2024',
    teamId: 'mercedes',
    driverId: 'lewis-hamilton',
    strategy: [
      {
        stint: 1,
        compound: 'hard',
        laps: 40,
        startLap: 1,
        endLap: 40,
        avgLapTime: '1:16.123',
        degradation: 0.1
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 18,
        startLap: 41,
        endLap: 58,
        avgLapTime: '1:15.456',
        degradation: 0.2
      }
    ],
    totalTime: '1:46:12.345',
    positionGain: 3,
    notes: 'Excellent tire management, strong pace in final stint',
    createdAt: '2024-05-26T14:30:00Z',
    updatedAt: '2024-05-26T14:30:00Z'
  },
  {
    id: '4',
    raceId: 'monaco-2024',
    teamId: 'mclaren',
    driverId: 'lando-norris',
    strategy: [
      {
        stint: 1,
        compound: 'medium',
        laps: 30,
        startLap: 1,
        endLap: 30,
        avgLapTime: '1:15.567',
        degradation: 0.2
      },
      {
        stint: 2,
        compound: 'soft',
        laps: 28,
        startLap: 31,
        endLap: 58,
        avgLapTime: '1:14.890',
        degradation: 0.3
      }
    ],
    totalTime: '1:45:34.567',
    positionGain: 1,
    notes: 'Consistent pace throughout, strong finish on softs',
    createdAt: '2024-05-26T14:30:00Z',
    updatedAt: '2024-05-26T14:30:00Z'
  },
  {
    id: '5',
    raceId: 'bahrain-2024',
    teamId: 'red-bull',
    driverId: 'max-verstappen',
    strategy: [
      {
        stint: 1,
        compound: 'soft',
        laps: 18,
        startLap: 1,
        endLap: 18,
        avgLapTime: '1:33.456',
        degradation: 0.3
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 22,
        startLap: 19,
        endLap: 40,
        avgLapTime: '1:34.123',
        degradation: 0.2
      },
      {
        stint: 3,
        compound: 'hard',
        laps: 17,
        startLap: 41,
        endLap: 57,
        avgLapTime: '1:35.789',
        degradation: 0.1
      }
    ],
    totalTime: '1:31:44.567',
    positionGain: 0,
    notes: 'Dominant performance with optimal tire management',
    createdAt: '2024-03-02T14:30:00Z',
    updatedAt: '2024-03-02T14:30:00Z'
  },
  {
    id: '6',
    raceId: 'bahrain-2024',
    teamId: 'ferrari',
    driverId: 'carlos-sainz',
    strategy: [
      {
        stint: 1,
        compound: 'medium',
        laps: 25,
        startLap: 1,
        endLap: 25,
        avgLapTime: '1:34.123',
        degradation: 0.2
      },
      {
        stint: 2,
        compound: 'hard',
        laps: 32,
        startLap: 26,
        endLap: 57,
        avgLapTime: '1:35.456',
        degradation: 0.1
      }
    ],
    totalTime: '1:32:12.345',
    positionGain: 2,
    notes: 'Strong race pace, good tire management',
    createdAt: '2024-03-02T14:30:00Z',
    updatedAt: '2024-03-02T14:30:00Z'
  },
  {
    id: '7',
    raceId: 'saudi-2024',
    teamId: 'red-bull',
    driverId: 'sergio-perez',
    strategy: [
      {
        stint: 1,
        compound: 'medium',
        laps: 20,
        startLap: 1,
        endLap: 20,
        avgLapTime: '1:31.234',
        degradation: 0.2
      },
      {
        stint: 2,
        compound: 'hard',
        laps: 30,
        startLap: 21,
        endLap: 50,
        avgLapTime: '1:32.567',
        degradation: 0.1
      }
    ],
    totalTime: '1:20:45.678',
    positionGain: 1,
    notes: 'Consistent pace, good tire management',
    createdAt: '2024-03-09T14:30:00Z',
    updatedAt: '2024-03-09T14:30:00Z'
  },
  {
    id: '8',
    raceId: 'australia-2024',
    teamId: 'ferrari',
    driverId: 'charles-leclerc',
    strategy: [
      {
        stint: 1,
        compound: 'soft',
        laps: 15,
        startLap: 1,
        endLap: 15,
        avgLapTime: '1:20.123',
        degradation: 0.3
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 25,
        startLap: 16,
        endLap: 40,
        avgLapTime: '1:21.456',
        degradation: 0.2
      },
      {
        stint: 3,
        compound: 'hard',
        laps: 18,
        startLap: 41,
        endLap: 58,
        avgLapTime: '1:22.789',
        degradation: 0.1
      }
    ],
    totalTime: '1:30:45.678',
    positionGain: 3,
    notes: 'Aggressive strategy pays off with podium finish',
    createdAt: '2024-03-24T14:30:00Z',
    updatedAt: '2024-03-24T14:30:00Z'
  },
  {
    id: '9',
    raceId: 'japan-2024',
    teamId: 'red-bull',
    driverId: 'max-verstappen',
    strategy: [
      {
        stint: 1,
        compound: 'medium',
        laps: 20,
        startLap: 1,
        endLap: 20,
        avgLapTime: '1:31.234',
        degradation: 0.2
      },
      {
        stint: 2,
        compound: 'hard',
        laps: 33,
        startLap: 21,
        endLap: 53,
        avgLapTime: '1:32.567',
        degradation: 0.1
      }
    ],
    totalTime: '1:22:45.678',
    positionGain: 0,
    notes: 'Perfect tire management, controlled race from start to finish',
    createdAt: '2024-04-07T14:30:00Z',
    updatedAt: '2024-04-07T14:30:00Z'
  },
  {
    id: '10',
    raceId: 'japan-2024',
    teamId: 'ferrari',
    driverId: 'charles-leclerc',
    strategy: [
      {
        stint: 1,
        compound: 'soft',
        laps: 15,
        startLap: 1,
        endLap: 15,
        avgLapTime: '1:30.123',
        degradation: 0.3
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 20,
        startLap: 16,
        endLap: 35,
        avgLapTime: '1:31.456',
        degradation: 0.2
      },
      {
        stint: 3,
        compound: 'hard',
        laps: 18,
        startLap: 36,
        endLap: 53,
        avgLapTime: '1:32.789',
        degradation: 0.1
      }
    ],
    totalTime: '1:23:12.345',
    positionGain: 1,
    notes: 'Aggressive strategy with early soft stint pays off',
    createdAt: '2024-04-07T14:30:00Z',
    updatedAt: '2024-04-07T14:30:00Z'
  },
  {
    id: '11',
    raceId: 'china-2024',
    teamId: 'mercedes',
    driverId: 'lewis-hamilton',
    strategy: [
      {
        stint: 1,
        compound: 'medium',
        laps: 25,
        startLap: 1,
        endLap: 25,
        avgLapTime: '1:33.456',
        degradation: 0.2
      },
      {
        stint: 2,
        compound: 'hard',
        laps: 31,
        startLap: 26,
        endLap: 56,
        avgLapTime: '1:34.789',
        degradation: 0.1
      }
    ],
    totalTime: '1:35:12.345',
    positionGain: 2,
    notes: 'Strong race pace, excellent tire management',
    createdAt: '2024-04-21T14:30:00Z',
    updatedAt: '2024-04-21T14:30:00Z'
  },
  {
    id: '12',
    raceId: 'china-2024',
    teamId: 'mclaren',
    driverId: 'lando-norris',
    strategy: [
      {
        stint: 1,
        compound: 'soft',
        laps: 18,
        startLap: 1,
        endLap: 18,
        avgLapTime: '1:32.123',
        degradation: 0.3
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 22,
        startLap: 19,
        endLap: 40,
        avgLapTime: '1:33.456',
        degradation: 0.2
      },
      {
        stint: 3,
        compound: 'hard',
        laps: 16,
        startLap: 41,
        endLap: 56,
        avgLapTime: '1:34.789',
        degradation: 0.1
      }
    ],
    totalTime: '1:35:45.678',
    positionGain: 3,
    notes: 'Three-stop strategy works perfectly, strong final stint',
    createdAt: '2024-04-21T14:30:00Z',
    updatedAt: '2024-04-21T14:30:00Z'
  },
  {
    id: '13',
    raceId: 'miami-2024',
    teamId: 'red-bull',
    driverId: 'max-verstappen',
    strategy: [
      {
        stint: 1,
        compound: 'medium',
        laps: 22,
        startLap: 1,
        endLap: 22,
        avgLapTime: '1:30.123',
        degradation: 0.2
      },
      {
        stint: 2,
        compound: 'hard',
        laps: 35,
        startLap: 23,
        endLap: 57,
        avgLapTime: '1:31.456',
        degradation: 0.1
      }
    ],
    totalTime: '1:31:45.678',
    positionGain: 0,
    notes: 'Dominant performance, perfect tire management',
    createdAt: '2024-05-05T14:30:00Z',
    updatedAt: '2024-05-05T14:30:00Z'
  },
  {
    id: '14',
    raceId: 'miami-2024',
    teamId: 'ferrari',
    driverId: 'carlos-sainz',
    strategy: [
      {
        stint: 1,
        compound: 'soft',
        laps: 15,
        startLap: 1,
        endLap: 15,
        avgLapTime: '1:29.123',
        degradation: 0.3
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 25,
        startLap: 16,
        endLap: 40,
        avgLapTime: '1:30.456',
        degradation: 0.2
      },
      {
        stint: 3,
        compound: 'hard',
        laps: 17,
        startLap: 41,
        endLap: 57,
        avgLapTime: '1:31.789',
        degradation: 0.1
      }
    ],
    totalTime: '1:32:12.345',
    positionGain: 2,
    notes: 'Aggressive strategy with early soft stint works well',
    createdAt: '2024-05-05T14:30:00Z',
    updatedAt: '2024-05-05T14:30:00Z'
  },
  {
    id: '15',
    raceId: 'miami-2024',
    teamId: 'mercedes',
    driverId: 'george-russell',
    strategy: [
      {
        stint: 1,
        compound: 'hard',
        laps: 35,
        startLap: 1,
        endLap: 35,
        avgLapTime: '1:31.123',
        degradation: 0.1
      },
      {
        stint: 2,
        compound: 'medium',
        laps: 22,
        startLap: 36,
        endLap: 57,
        avgLapTime: '1:30.456',
        degradation: 0.2
      }
    ],
    totalTime: '1:32:45.678',
    positionGain: 1,
    notes: 'Alternative strategy with early hard stint pays off',
    createdAt: '2024-05-05T14:30:00Z',
    updatedAt: '2024-05-05T14:30:00Z'
  }
]; 