import { Race } from '../types/race';

export const races: Race[] = [
  {
    id: '1',
    name: 'Bahrain Grand Prix',
    circuit: 'Bahrain International Circuit',
    country: 'Bahrain',
    countryCode: 'BH',
    date: '2024-03-02',
    status: 'completed',
    sessions: [
      { date: '2024-03-01', time: '11:30', type: 'practice1' },
      { date: '2024-03-01', time: '15:00', type: 'practice2' },
      { date: '2024-03-02', time: '11:30', type: 'practice3' },
      { date: '2024-03-02', time: '15:00', type: 'qualifying' },
      { date: '2024-03-03', time: '15:00', type: 'race' }
    ],
    results: [
      {
        position: 1,
        number: 1,
        driver: 'Max Verstappen',
        team: 'Red Bull Racing',
        laps: 57,
        time: '1:31:44.742',
        points: 25,
        fastestLap: true,
        status: 'Finished'
      },
      {
        position: 2,
        number: 11,
        driver: 'Sergio Perez',
        team: 'Red Bull Racing',
        laps: 57,
        time: '+22.457',
        points: 18,
        status: 'Finished'
      },
      {
        position: 3,
        number: 55,
        driver: 'Carlos Sainz',
        team: 'Ferrari',
        laps: 57,
        time: '+25.110',
        points: 15,
        status: 'Finished'
      }
    ],
    circuitImage: '/circuits/bahrain.jpg',
    countryFlag: '/flags/bh.png',
    description: 'The Bahrain International Circuit is a motorsport venue opened in 2004 and used for drag racing, GP2 Series and the annual Formula One Bahrain Grand Prix.',
    trackLength: '5.412 km',
    laps: 57,
    lapRecord: {
      driver: 'Pedro de la Rosa',
      time: '1:31.447',
      year: 2005
    }
  },
  {
    id: '2',
    name: 'Saudi Arabian Grand Prix',
    circuit: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    date: '2024-03-09',
    status: 'upcoming',
    sessions: [
      { date: '2024-03-08', time: '16:30', type: 'practice1' },
      { date: '2024-03-08', time: '20:00', type: 'practice2' },
      { date: '2024-03-09', time: '16:30', type: 'practice3' },
      { date: '2024-03-09', time: '20:00', type: 'qualifying' },
      { date: '2024-03-10', time: '20:00', type: 'race' }
    ],
    circuitImage: '/circuits/jeddah.jpg',
    countryFlag: '/flags/sa.png',
    description: 'The Jeddah Corniche Circuit is a street circuit in Jeddah, Saudi Arabia. It is the second-longest circuit on the Formula One calendar after Spa-Francorchamps.',
    trackLength: '6.174 km',
    laps: 50
  }
]; 