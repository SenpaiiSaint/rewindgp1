'use client';

import { motion } from 'motion/react';
import { FaChartLine, FaTachometerAlt, FaCloudSun, FaFlag } from 'react-icons/fa';
import { PiTireDuotone } from "react-icons/pi";

// Placeholder data - will be replaced with API data later
const raceStats = {
  fastestLap: {
    driver: 'Max Verstappen',
    time: '1:27.097',
    lap: 45,
    team: 'Red Bull Racing'
  },
  averagePace: {
    leader: '1:28.456',
    midfield: '1:29.789',
    backmarkers: '1:31.234'
  },
  overtakes: 42,
  safetyCars: 1,
  pitStops: 45
};

const tireAnalysis = [
  {
    compound: 'Soft',
    averageLapTime: '1:28.123',
    degradation: '0.2s per lap',
    totalLaps: 25
  },
  {
    compound: 'Medium',
    averageLapTime: '1:28.456',
    degradation: '0.1s per lap',
    totalLaps: 35
  },
  {
    compound: 'Hard',
    averageLapTime: '1:28.789',
    degradation: '0.05s per lap',
    totalLaps: 40
  }
];

const weatherImpact = {
  temperature: '24°C',
  trackTemp: '32°C',
  humidity: '45%',
  windSpeed: '12 km/h',
  conditions: 'Clear'
};

export default function RaceAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Race Overview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaFlag className="mr-2 text-red-500" />
              Race Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Fastest Lap</h3>
                <p className="text-2xl font-bold text-yellow-500">{raceStats.fastestLap.time}</p>
                <p className="text-gray-400">{raceStats.fastestLap.driver}</p>
                <p className="text-sm text-gray-500">Lap {raceStats.fastestLap.lap}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Overtakes</h3>
                <p className="text-2xl font-bold text-green-500">{raceStats.overtakes}</p>
                <p className="text-gray-400">Total Passes</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Safety Cars</h3>
                <p className="text-2xl font-bold text-yellow-500">{raceStats.safetyCars}</p>
                <p className="text-gray-400">Deployments</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Pit Stops</h3>
                <p className="text-2xl font-bold text-blue-500">{raceStats.pitStops}</p>
                <p className="text-gray-400">Total Stops</p>
              </motion.div>
            </div>
          </div>

          {/* Pace Analysis */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaTachometerAlt className="mr-2 text-red-500" />
              Pace Analysis
            </h2>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Average Lap Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Front Runners</span>
                    <span className="text-yellow-500">{raceStats.averagePace.leader}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Midfield</span>
                    <span className="text-blue-500">{raceStats.averagePace.midfield}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Backmarkers</span>
                    <span className="text-gray-500">{raceStats.averagePace.backmarkers}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tire Analysis */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <PiTireDuotone className="mr-2 text-red-500" />
              Tire Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tireAnalysis.map((tire, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-6 rounded-lg border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-4">{tire.compound}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400">Avg. Lap: <span className="text-white">{tire.averageLapTime}</span></p>
                    <p className="text-gray-400">Degradation: <span className="text-white">{tire.degradation}</span></p>
                    <p className="text-gray-400">Total Laps: <span className="text-white">{tire.totalLaps}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Weather Impact */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCloudSun className="mr-2 text-red-500" />
              Weather Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Air Temp</h3>
                <p className="text-2xl font-bold">{weatherImpact.temperature}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Track Temp</h3>
                <p className="text-2xl font-bold">{weatherImpact.trackTemp}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Humidity</h3>
                <p className="text-2xl font-bold">{weatherImpact.humidity}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Wind</h3>
                <p className="text-2xl font-bold">{weatherImpact.windSpeed}</p>
              </motion.div>
            </div>
          </div>

          {/* Placeholder for Strategy Analysis */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaChartLine className="mr-2 text-red-500" />
              Strategy Analysis
            </h2>
            <p className="text-gray-400">Detailed race strategy analysis coming soon...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}