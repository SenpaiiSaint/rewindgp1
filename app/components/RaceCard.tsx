import { Race } from '../types/race';
import Image from 'next/image';
import Link from 'next/link';

interface RaceCardProps {
  race: Race;
}

export default function RaceCard({ race }: RaceCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100/80 text-green-900';
      case 'upcoming':
        return 'bg-blue-100/80 text-blue-900';
      case 'in-progress':
        return 'bg-yellow-100/80 text-yellow-900';
      case 'cancelled':
        return 'bg-red-100/80 text-red-900';
      default:
        return 'bg-gray-100/80 text-gray-900';
    }
  };

  return (
    <Link href={`/races/${race.id}`}>
      <div className="group relative h-full overflow-hidden rounded-xl bg-white/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:scale-[1.02] border border-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative flex h-full flex-col p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-950">{race.name}</h3>
              <p className="text-gray-800">{race.circuit}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${getStatusColor(race.status)}`}>
                {race.status}
              </span>
              <p className="text-sm font-medium text-gray-700">
                {new Date(race.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="relative h-10 w-16 shrink-0 overflow-hidden rounded-lg border border-white/30 backdrop-blur-sm">
              <Image
                src={race.countryFlag}
                alt={`${race.country} flag`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/30 backdrop-blur-sm">
              <Image
                src={race.circuitImage}
                alt={`${race.circuit} track`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 object-[50%_20%]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={false}
              />
            </div>
          </div>

          <div className="mt-4 flex-1 space-y-3">
            <p className="text-sm text-gray-800 line-clamp-2">{race.description}</p>
            <div className="grid grid-cols-2 gap-3 rounded-lg bg-white/30 backdrop-blur-sm p-3 border border-white/20">
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-700">Track Length</p>
                <p className="text-sm font-semibold text-gray-950">{race.trackLength}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-700">Laps</p>
                <p className="text-sm font-semibold text-gray-950">{race.laps}</p>
              </div>
              <div className="col-span-2 space-y-1">
                <p className="text-xs font-medium text-gray-700">Lap Record</p>
                <p className="text-sm font-semibold text-gray-950">
                  {race.lapRecord 
                    ? `${race.lapRecord.driver} (${race.lapRecord.time}, ${race.lapRecord.year})`
                    : 'No record available'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}