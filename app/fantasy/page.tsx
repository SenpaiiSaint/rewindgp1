'use client';

import { motion } from 'motion/react';
import { FaTrophy, FaChartLine, FaCar, FaCoins, FaCalendarAlt } from 'react-icons/fa';

// Placeholder data - will be replaced with API data later
const leaderboard = [
  { name: 'SpeedKings', points: 1250, rank: 1, change: '+2' },
  { name: 'PitStopMasters', points: 1180, rank: 2, change: '-1' },
  { name: 'GridStarters', points: 1100, rank: 3, change: '+1' },
];

const myTeam = {
  name: 'My Racing Team',
  budget: 100000000,
  drivers: [
    { name: 'Max Verstappen', points: 450, cost: 30000000 },
    { name: 'Lewis Hamilton', points: 380, cost: 28000000 },
  ],
  constructors: [
    { name: 'Red Bull Racing', points: 650, cost: 40000000 },
  ]
};

const upcomingPredictions = [
  {
    race: 'Bahrain Grand Prix',
    date: 'March 2, 2024',
    predictions: [
      { position: 'P1', driver: 'Max Verstappen', odds: '1.5' },
      { position: 'P2', driver: 'Lewis Hamilton', odds: '3.2' },
      { position: 'P3', driver: 'Charles Leclerc', odds: '4.5' },
    ]
  }
];

export default function FantasyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Team Overview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCar className="mr-2 text-red-500" />
              My Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Team Details</h3>
                <div className="space-y-2">
                  <p className="text-gray-400">Team Name: <span className="text-white">{myTeam.name}</span></p>
                  <p className="text-gray-400">Budget: <span className="text-green-500">${myTeam.budget.toLocaleString()}</span></p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Drivers</h3>
                <div className="space-y-2">
                  {myTeam.drivers.map((driver, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{driver.name}</span>
                      <span className="text-yellow-500">{driver.points} pts</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaTrophy className="mr-2 text-yellow-500" />
              Fantasy League Leaderboard
            </h2>
            <div className="space-y-4">
              {leaderboard.map((team, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-yellow-500">#{team.rank}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{team.name}</h3>
                        <p className="text-gray-400">{team.points} points</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full ${
                      team.change.startsWith('+') ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                    }`}>
                      {team.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Race Predictions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-500" />
              Upcoming Race Predictions
            </h2>
            {upcomingPredictions.map((race, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10 mb-6"
              >
                <h3 className="text-xl font-semibold mb-4">{race.race}</h3>
                <p className="text-gray-400 mb-4">{race.date}</p>
                <div className="space-y-3">
                  {race.predictions.map((prediction, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-300">{prediction.position}: {prediction.driver}</span>
                      <span className="text-green-500">Odds: {prediction.odds}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Placeholder for Market */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCoins className="mr-2 text-yellow-500" />
              Driver Market
            </h2>
            <p className="text-gray-400">Driver market features coming soon...</p>
          </div>

          {/* Placeholder for Statistics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaChartLine className="mr-2 text-green-500" />
              Team Statistics
            </h2>
            <p className="text-gray-400">Detailed team statistics coming soon...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 