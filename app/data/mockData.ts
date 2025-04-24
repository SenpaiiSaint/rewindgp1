export interface Race {
  id: string;
  name: string;
  date: string;
  circuit: string;
  country: string;
  countryCode: string;
  laps: number;
  trackLength: string;
  lapRecord?: {
    driver: string;
    time: string;
    year: number;
  };
}

export interface Team {
  id: string;
  name: string;
  color: string;
  drivers: Driver[];
  principal: string;
  chassis: string;
  powerUnit: string;
  firstTeamEntry: number;
  worldChampionships: number;
}

export interface Driver {
  id: string;
  name: string;
  teamId: string;
  number: number;
  country: string;
  countryCode: string;
  dateOfBirth: string;
  placeOfBirth: string;
  worldChampionships: number;
  grandPrixEntries: number;
  grandPrixStarts: number;
  podiums: number;
  polePositions: number;
  fastestLaps: number;
}

export interface Compound {
  id: string;
  name: string;
  color: string;
  durability: number;
  grip: number;
  temperatureRange: {
    min: number;
    max: number;
  };
}

export const mockRaces: Race[] = [
  {
    id: 'bahrain-2024',
    name: 'Bahrain GP 2024',
    date: '2024-03-02',
    circuit: 'Bahrain International Circuit',
    country: 'Bahrain',
    countryCode: 'BH',
    laps: 57,
    trackLength: '5.412 km',
    lapRecord: {
      driver: 'Pedro de la Rosa',
      time: '1:31.447',
      year: 2005
    }
  },
  {
    id: 'saudi-2024',
    name: 'Saudi Arabian GP 2024',
    date: '2024-03-09',
    circuit: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    laps: 50,
    trackLength: '6.174 km',
    lapRecord: {
      driver: 'Lewis Hamilton',
      time: '1:30.734',
      year: 2021
    }
  },
  {
    id: 'australia-2024',
    name: 'Australian GP 2024',
    date: '2024-03-24',
    circuit: 'Albert Park Circuit',
    country: 'Australia',
    countryCode: 'AU',
    laps: 58,
    trackLength: '5.303 km',
    lapRecord: {
      driver: 'Charles Leclerc',
      time: '1:20.260',
      year: 2022
    }
  },
  {
    id: 'japan-2024',
    name: 'Japanese GP 2024',
    date: '2024-04-07',
    circuit: 'Suzuka Circuit',
    country: 'Japan',
    countryCode: 'JP',
    laps: 53,
    trackLength: '5.807 km',
    lapRecord: {
      driver: 'Lewis Hamilton',
      time: '1:30.983',
      year: 2019
    }
  },
  {
    id: 'china-2024',
    name: 'Chinese GP 2024',
    date: '2024-04-21',
    circuit: 'Shanghai International Circuit',
    country: 'China',
    countryCode: 'CN',
    laps: 56,
    trackLength: '5.451 km',
    lapRecord: {
      driver: 'Michael Schumacher',
      time: '1:32.238',
      year: 2004
    }
  },
  {
    id: 'miami-2024',
    name: 'Miami GP 2024',
    date: '2024-05-05',
    circuit: 'Miami International Autodrome',
    country: 'United States',
    countryCode: 'US',
    laps: 57,
    trackLength: '5.412 km',
    lapRecord: {
      driver: 'Max Verstappen',
      time: '1:29.708',
      year: 2023
    }
  },
  {
    id: 'monaco-2024',
    name: 'Monaco GP 2024',
    date: '2024-05-26',
    circuit: 'Circuit de Monaco',
    country: 'Monaco',
    countryCode: 'MC',
    laps: 78,
    trackLength: '3.337 km',
    lapRecord: {
      driver: 'Lewis Hamilton',
      time: '1:12.909',
      year: 2021
    }
  }
];

export const mockTeams: Team[] = [
  {
    id: 'red-bull',
    name: 'Red Bull Racing',
    color: '#0600EF',
    principal: 'Christian Horner',
    chassis: 'RB20',
    powerUnit: 'Honda RBPT',
    firstTeamEntry: 2005,
    worldChampionships: 6,
    drivers: [
      {
        id: 'max-verstappen',
        name: 'Max Verstappen',
        teamId: 'red-bull',
        number: 1,
        country: 'Netherlands',
        countryCode: 'NL',
        dateOfBirth: '1997-09-30',
        placeOfBirth: 'Hasselt, Belgium',
        worldChampionships: 3,
        grandPrixEntries: 185,
        grandPrixStarts: 185,
        podiums: 98,
        polePositions: 35,
        fastestLaps: 30
      },
      {
        id: 'sergio-perez',
        name: 'Sergio Perez',
        teamId: 'red-bull',
        number: 11,
        country: 'Mexico',
        countryCode: 'MX',
        dateOfBirth: '1990-01-26',
        placeOfBirth: 'Guadalajara, Mexico',
        worldChampionships: 0,
        grandPrixEntries: 259,
        grandPrixStarts: 258,
        podiums: 35,
        polePositions: 2,
        fastestLaps: 10
      }
    ]
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    color: '#DC0000',
    principal: 'Frédéric Vasseur',
    chassis: 'SF-24',
    powerUnit: 'Ferrari',
    firstTeamEntry: 1950,
    worldChampionships: 16,
    drivers: [
      {
        id: 'charles-leclerc',
        name: 'Charles Leclerc',
        teamId: 'ferrari',
        number: 16,
        country: 'Monaco',
        countryCode: 'MC',
        dateOfBirth: '1997-10-16',
        placeOfBirth: 'Monte Carlo, Monaco',
        worldChampionships: 0,
        grandPrixEntries: 123,
        grandPrixStarts: 123,
        podiums: 30,
        polePositions: 23,
        fastestLaps: 7
      },
      {
        id: 'carlos-sainz',
        name: 'Carlos Sainz',
        teamId: 'ferrari',
        number: 55,
        country: 'Spain',
        countryCode: 'ES',
        dateOfBirth: '1994-09-01',
        placeOfBirth: 'Madrid, Spain',
        worldChampionships: 0,
        grandPrixEntries: 185,
        grandPrixStarts: 185,
        podiums: 20,
        polePositions: 5,
        fastestLaps: 3
      }
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes',
    color: '#00D2BE',
    principal: 'Toto Wolff',
    chassis: 'W15',
    powerUnit: 'Mercedes',
    firstTeamEntry: 1954,
    worldChampionships: 8,
    drivers: [
      {
        id: 'lewis-hamilton',
        name: 'Lewis Hamilton',
        teamId: 'mercedes',
        number: 44,
        country: 'United Kingdom',
        countryCode: 'GB',
        dateOfBirth: '1985-01-07',
        placeOfBirth: 'Stevenage, UK',
        worldChampionships: 7,
        grandPrixEntries: 335,
        grandPrixStarts: 335,
        podiums: 197,
        polePositions: 104,
        fastestLaps: 65
      },
      {
        id: 'george-russell',
        name: 'George Russell',
        teamId: 'mercedes',
        number: 63,
        country: 'United Kingdom',
        countryCode: 'GB',
        dateOfBirth: '1998-02-15',
        placeOfBirth: 'King\'s Lynn, UK',
        worldChampionships: 0,
        grandPrixEntries: 104,
        grandPrixStarts: 104,
        podiums: 11,
        polePositions: 1,
        fastestLaps: 6
      }
    ]
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    color: '#FF8700',
    principal: 'Andrea Stella',
    chassis: 'MCL38',
    powerUnit: 'Mercedes',
    firstTeamEntry: 1966,
    worldChampionships: 8,
    drivers: [
      {
        id: 'lando-norris',
        name: 'Lando Norris',
        teamId: 'mclaren',
        number: 4,
        country: 'United Kingdom',
        countryCode: 'GB',
        dateOfBirth: '1999-11-13',
        placeOfBirth: 'Bristol, UK',
        worldChampionships: 0,
        grandPrixEntries: 104,
        grandPrixStarts: 104,
        podiums: 13,
        polePositions: 1,
        fastestLaps: 6
      },
      {
        id: 'oscar-piastri',
        name: 'Oscar Piastri',
        teamId: 'mclaren',
        number: 81,
        country: 'Australia',
        countryCode: 'AU',
        dateOfBirth: '2001-04-06',
        placeOfBirth: 'Melbourne, Australia',
        worldChampionships: 0,
        grandPrixEntries: 24,
        grandPrixStarts: 24,
        podiums: 2,
        polePositions: 0,
        fastestLaps: 2
      }
    ]
  },
  {
    id: 'alpine',
    name: 'Alpine',
    color: '#0090FF',
    principal: 'Bruno Famin',
    chassis: 'A524',
    powerUnit: 'Renault',
    firstTeamEntry: 1981,
    worldChampionships: 0,
    drivers: [
      {
        id: 'esteban-ocon',
        name: 'Esteban Ocon',
        teamId: 'alpine',
        number: 31,
        country: 'France',
        countryCode: 'FR',
        dateOfBirth: '1996-09-17',
        placeOfBirth: 'Évreux, France',
        worldChampionships: 0,
        grandPrixEntries: 133,
        grandPrixStarts: 133,
        podiums: 3,
        polePositions: 0,
        fastestLaps: 0
      },
      {
        id: 'pierre-gasly',
        name: 'Pierre Gasly',
        teamId: 'alpine',
        number: 10,
        country: 'France',
        countryCode: 'FR',
        dateOfBirth: '1996-02-07',
        placeOfBirth: 'Rouen, France',
        worldChampionships: 0,
        grandPrixEntries: 133,
        grandPrixStarts: 133,
        podiums: 4,
        polePositions: 0,
        fastestLaps: 3
      }
    ]
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    color: '#006F62',
    principal: 'Mike Krack',
    chassis: 'AMR24',
    powerUnit: 'Mercedes',
    firstTeamEntry: 1959,
    worldChampionships: 0,
    drivers: [
      {
        id: 'fernando-alonso',
        name: 'Fernando Alonso',
        teamId: 'aston-martin',
        number: 14,
        country: 'Spain',
        countryCode: 'ES',
        dateOfBirth: '1981-07-29',
        placeOfBirth: 'Oviedo, Spain',
        worldChampionships: 2,
        grandPrixEntries: 380,
        grandPrixStarts: 379,
        podiums: 106,
        polePositions: 22,
        fastestLaps: 24
      },
      {
        id: 'lance-stroll',
        name: 'Lance Stroll',
        teamId: 'aston-martin',
        number: 18,
        country: 'Canada',
        countryCode: 'CA',
        dateOfBirth: '1998-10-29',
        placeOfBirth: 'Montreal, Canada',
        worldChampionships: 0,
        grandPrixEntries: 147,
        grandPrixStarts: 147,
        podiums: 3,
        polePositions: 1,
        fastestLaps: 0
      }
    ]
  },
  {
    id: 'rb',
    name: 'RB',
    color: '#2B4562',
    principal: 'Laurent Mekies',
    chassis: 'VCARB 01',
    powerUnit: 'Honda RBPT',
    firstTeamEntry: 2006,
    worldChampionships: 0,
    drivers: [
      {
        id: 'daniel-ricciardo',
        name: 'Daniel Ricciardo',
        teamId: 'rb',
        number: 3,
        country: 'Australia',
        countryCode: 'AU',
        dateOfBirth: '1989-07-01',
        placeOfBirth: 'Perth, Australia',
        worldChampionships: 0,
        grandPrixEntries: 242,
        grandPrixStarts: 241,
        podiums: 32,
        polePositions: 3,
        fastestLaps: 16
      },
      {
        id: 'yuki-tsunoda',
        name: 'Yuki Tsunoda',
        teamId: 'rb',
        number: 22,
        country: 'Japan',
        countryCode: 'JP',
        dateOfBirth: '2000-05-11',
        placeOfBirth: 'Sagamihara, Japan',
        worldChampionships: 0,
        grandPrixEntries: 67,
        grandPrixStarts: 67,
        podiums: 0,
        polePositions: 0,
        fastestLaps: 1
      }
    ]
  },
  {
    id: 'haas',
    name: 'Haas',
    color: '#FFFFFF',
    principal: 'Ayao Komatsu',
    chassis: 'VF-24',
    powerUnit: 'Ferrari',
    firstTeamEntry: 2016,
    worldChampionships: 0,
    drivers: [
      {
        id: 'kevin-magnussen',
        name: 'Kevin Magnussen',
        teamId: 'haas',
        number: 20,
        country: 'Denmark',
        countryCode: 'DK',
        dateOfBirth: '1992-10-05',
        placeOfBirth: 'Roskilde, Denmark',
        worldChampionships: 0,
        grandPrixEntries: 163,
        grandPrixStarts: 163,
        podiums: 1,
        polePositions: 0,
        fastestLaps: 2
      },
      {
        id: 'nico-hulkenberg',
        name: 'Nico Hülkenberg',
        teamId: 'haas',
        number: 27,
        country: 'Germany',
        countryCode: 'DE',
        dateOfBirth: '1987-08-19',
        placeOfBirth: 'Emmerich am Rhein, Germany',
        worldChampionships: 0,
        grandPrixEntries: 206,
        grandPrixStarts: 206,
        podiums: 0,
        polePositions: 1,
        fastestLaps: 2
      }
    ]
  },
  {
    id: 'sauber',
    name: 'Stake F1 Team Kick Sauber',
    color: '#52E252',
    principal: 'Alessandro Alunni Bravi',
    chassis: 'C44',
    powerUnit: 'Ferrari',
    firstTeamEntry: 1993,
    worldChampionships: 0,
    drivers: [
      {
        id: 'valtteri-bottas',
        name: 'Valtteri Bottas',
        teamId: 'sauber',
        number: 77,
        country: 'Finland',
        countryCode: 'FI',
        dateOfBirth: '1989-08-28',
        placeOfBirth: 'Nastola, Finland',
        worldChampionships: 0,
        grandPrixEntries: 223,
        grandPrixStarts: 223,
        podiums: 67,
        polePositions: 20,
        fastestLaps: 19
      },
      {
        id: 'zhou-guanyu',
        name: 'Zhou Guanyu',
        teamId: 'sauber',
        number: 24,
        country: 'China',
        countryCode: 'CN',
        dateOfBirth: '1999-05-30',
        placeOfBirth: 'Shanghai, China',
        worldChampionships: 0,
        grandPrixEntries: 44,
        grandPrixStarts: 44,
        podiums: 0,
        polePositions: 0,
        fastestLaps: 0
      }
    ]
  },
  {
    id: 'williams',
    name: 'Williams',
    color: '#005AFF',
    principal: 'James Vowles',
    chassis: 'FW46',
    powerUnit: 'Mercedes',
    firstTeamEntry: 1978,
    worldChampionships: 9,
    drivers: [
      {
        id: 'alexander-albon',
        name: 'Alexander Albon',
        teamId: 'williams',
        number: 23,
        country: 'Thailand',
        countryCode: 'TH',
        dateOfBirth: '1996-03-23',
        placeOfBirth: 'London, UK',
        worldChampionships: 0,
        grandPrixEntries: 82,
        grandPrixStarts: 82,
        podiums: 2,
        polePositions: 0,
        fastestLaps: 0
      },
      {
        id: 'logan-sargeant',
        name: 'Logan Sargeant',
        teamId: 'williams',
        number: 2,
        country: 'United States',
        countryCode: 'US',
        dateOfBirth: '2000-12-31',
        placeOfBirth: 'Fort Lauderdale, USA',
        worldChampionships: 0,
        grandPrixEntries: 24,
        grandPrixStarts: 24,
        podiums: 0,
        polePositions: 0,
        fastestLaps: 0
      }
    ]
  }
];

export const mockCompounds: Compound[] = [
  {
    id: 'soft',
    name: 'Soft',
    color: 'red',
    durability: 2,
    grip: 5,
    temperatureRange: {
      min: 20,
      max: 50
    }
  },
  {
    id: 'medium',
    name: 'Medium',
    color: 'yellow',
    durability: 3,
    grip: 4,
    temperatureRange: {
      min: 15,
      max: 45
    }
  },
  {
    id: 'hard',
    name: 'Hard',
    color: 'white',
    durability: 5,
    grip: 3,
    temperatureRange: {
      min: 10,
      max: 40
    }
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    color: 'green',
    durability: 4,
    grip: 4,
    temperatureRange: {
      min: 5,
      max: 30
    }
  },
  {
    id: 'wet',
    name: 'Wet',
    color: 'blue',
    durability: 3,
    grip: 5,
    temperatureRange: {
      min: 0,
      max: 25
    }
  }
]; 