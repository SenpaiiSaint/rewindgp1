'use client';

import { motion } from 'motion/react';
import { FaUser, FaTrophy, FaHistory, FaChartLine } from 'react-icons/fa';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
        >
          <div className="flex items-center space-x-6">
            <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center">
              <FaUser className="w-16 h-16 text-gray-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">User Profile</h1>
              <p className="text-gray-400 mt-2">Member since 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <FaTrophy className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold">Achievements</h3>
              <p className="text-gray-400 mt-2">Coming soon...</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <FaHistory className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold">Race History</h3>
              <p className="text-gray-400 mt-2">Coming soon...</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <FaChartLine className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold">Statistics</h3>
              <p className="text-gray-400 mt-2">Coming soon...</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 