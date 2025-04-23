'use client';

import { motion } from 'motion/react';
import { FaUsers, FaComments, FaTrophy, FaChartLine, FaUserFriends } from 'react-icons/fa';

// Placeholder data - will be replaced with API data later
const topUsers = [
  { name: 'F1Fan2024', points: 1250, rank: 1 },
  { name: 'SpeedDemon', points: 1100, rank: 2 },
  { name: 'RaceMaster', points: 950, rank: 3 },
];

const recentDiscussions = [
  {
    title: '2024 Season Predictions',
    author: 'F1Fan2024',
    replies: 42,
    lastActive: '2 hours ago'
  },
  {
    title: 'Best Overtakes of 2023',
    author: 'SpeedDemon',
    replies: 28,
    lastActive: '5 hours ago'
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <FaUsers className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold">10,000+</h3>
              <p className="text-gray-400">Active Members</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <FaComments className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold">5,000+</h3>
              <p className="text-gray-400">Daily Discussions</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <FaUserFriends className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-gray-400">Fantasy Teams</p>
            </motion.div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaTrophy className="mr-2 text-yellow-500" />
              Top Community Members
            </h2>
            <div className="space-y-4">
              {topUsers.map((user, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-yellow-500">#{user.rank}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-gray-400">{user.points} points</p>
                      </div>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaComments className="mr-2 text-blue-500" />
              Recent Discussions
            </h2>
            <div className="space-y-4">
              {recentDiscussions.map((discussion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{discussion.title}</h3>
                      <p className="text-gray-400">by {discussion.author}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300">{discussion.replies} replies</p>
                      <p className="text-gray-400 text-sm">{discussion.lastActive}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Placeholder for Fantasy League */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaChartLine className="mr-2 text-green-500" />
              Fantasy League
            </h2>
            <p className="text-gray-400">Fantasy league features coming soon...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 