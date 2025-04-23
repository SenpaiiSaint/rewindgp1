'use client';

import { motion } from 'motion/react';
import { FaCalendarAlt, FaFlag, FaTrophy, FaSearch } from 'react-icons/fa';

// Placeholder data - will be replaced with API data later
const seasons = [
  { year: 2024, races: 24 },
  { year: 2023, races: 22 },
  { year: 2022, races: 22 },
];

const upcomingRaces = [
  {
    name: 'Bahrain Grand Prix',
    date: 'March 2, 2024',
    circuit: 'Bahrain International Circuit',
    status: 'Upcoming'
  },
  {
    name: 'Saudi Arabian Grand Prix',
    date: 'March 9, 2024',
    circuit: 'Jeddah Corniche Circuit',
    status: 'Upcoming'
  }
];

export default function RacesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Search and Filter Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search races..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-red-500"
                />
              </div>
              <select className="bg-white/10 rounded-lg border border-white/20 px-4 py-2 focus:outline-none focus:border-red-500">
                <option value="">All Seasons</option>
                {seasons.map(season => (
                  <option key={season.year} value={season.year}>
                    {season.year} ({season.races} races)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Upcoming Races Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCalendarAlt className="mr-2 text-red-500" />
              Upcoming Races
            </h2>
            <div className="space-y-4">
              {upcomingRaces.map((race, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{race.name}</h3>
                      <p className="text-gray-400">{race.circuit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300">{race.date}</p>
                      <span className="text-green-500 text-sm">{race.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Placeholder for Race Calendar */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaFlag className="mr-2 text-red-500" />
              Race Calendar
            </h2>
            <p className="text-gray-400">Race calendar will be displayed here...</p>
          </div>

          {/* Placeholder for Past Results */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaTrophy className="mr-2 text-red-500" />
              Past Results
            </h2>
            <p className="text-gray-400">Past race results will be displayed here...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 