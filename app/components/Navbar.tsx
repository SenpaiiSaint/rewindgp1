'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTrophy, FaVideo, FaChartLine, FaUsers, FaUser } from 'react-icons/fa';

const navItems = [
  { name: 'Races', href: '/races', icon: FaVideo },
  { name: 'Analysis', href: '/analysis', icon: FaChartLine },
  { name: 'Fantasy', href: '/fantasy', icon: FaTrophy },
  { name: 'Community', href: '/community', icon: FaUsers },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500"
              >
                RewindGP
              </motion.h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-red-500/20 to-yellow-500/20 text-white border border-white/10'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white border border-transparent'
                    }`}
                  >
                    {item.icon && <item.icon className="mr-2" />}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center">
            <Link
              href="/profile"
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300"
            >
              <FaUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 