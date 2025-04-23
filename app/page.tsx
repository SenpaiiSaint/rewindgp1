"use client";

// ---> meant for races api ---> import useSWR from "swr";
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFlag, FaCalendarAlt, FaUsers, FaCar, 
  FaGlobe, FaFire, FaStar, FaHistory, FaClock, FaMedal,
  FaChevronRight
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

// ---> meant for races api ---> const fetcher = (url: string) => fetch(url).then(res => res.json());

// Featured Races Section
const featuredRaces = [
  {
    id: 1,
    title: '2023 British Grand Prix',
    description: 'Thrilling wet race with multiple lead changes and dramatic overtakes',
    image: '/races/british-gp.jpg',
    category: 'Dramatic Finishes',
    date: 'July 9, 2023',
    circuit: 'Silverstone Circuit',
    rating: 4.8,
    views: '2.5M',
    duration: '1:45:32',
    highlights: ['Wet weather start', 'Multiple lead changes', 'Dramatic final lap'],
    drivers: ['Max Verstappen', 'Lewis Hamilton', 'Lando Norris'],
  },
  {
    id: 2,
    title: '2023 Brazilian Grand Prix',
    description: 'Incredible overtakes and strategic masterclass in changing conditions',
    image: '/races/brazilian-gp.jpg',
    category: 'Top Races',
    date: 'November 5, 2023',
    circuit: 'Interlagos',
    rating: 4.9,
    views: '3.1M',
    duration: '1:52:45',
    highlights: ['Strategic brilliance', 'Wheel-to-wheel racing', 'Late safety car'],
    drivers: ['Sergio Perez', 'Charles Leclerc', 'George Russell'],
  },
  {
    id: 3,
    title: '2023 Monaco Grand Prix',
    description: 'Historic circuit, rain chaos, and dramatic finish in the principality',
    image: '/races/monaco-gp.jpg',
    category: 'Rain Races',
    date: 'May 28, 2023',
    circuit: 'Circuit de Monaco',
    rating: 4.7,
    views: '2.8M',
    duration: '1:48:12',
    highlights: ['Wet qualifying', 'Tight racing', 'Last lap drama'],
    drivers: ['Fernando Alonso', 'Carlos Sainz', 'Esteban Ocon'],
  },
];

// stats section
const stats = [
  { 
    title: 'Races', 
    value: '1000+', 
    icon: FaCalendarAlt, 
    color: 'text-red-500', 
    description: 'Historic races in our database',
    subtext: 'From 1950 to present'
  },
  { 
    title: 'Drivers', 
    value: '800+', 
    icon: FaUsers, 
    color: 'text-blue-500', 
    description: 'Legendary drivers featured',
    subtext: 'Including 33 World Champions'
  },
  { 
    title: 'Teams', 
    value: '100+', 
    icon: FaCar, 
    color: 'text-yellow-500', 
    description: 'Iconic teams covered',
    subtext: 'From Ferrari to Red Bull'
  },
  { 
    title: 'Circuits', 
    value: '70+', 
    icon: FaGlobe, 
    color: 'text-green-500', 
    description: 'World-class circuits',
    subtext: 'Across 5 continents'
  },
];

// Categories section
const categories = [
  { 
    title: 'Classic Races', 
    icon: FaHistory, 
    color: 'text-purple-500', 
    count: 150,
    description: 'Iconic moments from F1 history',
    featured: ['1981 Spanish GP', '1993 European GP', '2008 Brazilian GP']
  },
  { 
    title: 'Rain Masters', 
    icon: FaFire, 
    color: 'text-blue-500', 
    count: 75,
    description: 'Masterful performances in wet conditions',
    featured: ['1996 Spanish GP', '2008 British GP', '2021 Russian GP']
  },
  { 
    title: 'Pole to Win', 
    icon: FaFlag, 
    color: 'text-green-500', 
    count: 100,
    description: 'Dominant performances from start to finish',
    featured: ['2014 Abu Dhabi GP', '2019 French GP', '2022 Belgian GP']
  },
  { 
    title: 'Overtake Kings', 
    icon: FaStar, 
    color: 'text-yellow-500', 
    count: 100,
    description: 'Most exciting overtaking battles',
    featured: ['2011 Chinese GP', '2019 Austrian GP', '2021 Saudi Arabian GP']
  },
];

// Featured Drivers and Circuits sections
const featuredDrivers = [
  {
    id: 1,
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    number: 1,
    image: '/drivers/verstappen.jpg',
    stats: {
      wins: 62,
      poles: 40,
      podiums: 108,
      championships: 3
    },
    highlights: ['3-time World Champion (2021-2023)', 'Most wins in a season (19)', 'Youngest F1 race winner']
  },
  {
    id: 2,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
    number: 44,
    image: '/drivers/hamilton.jpg',
    stats: {
      wins: 103,
      poles: 104,
      podiums: 197,
      championships: 7
    },
    highlights: ['7-time World Champion', 'Most wins in F1 history', 'Most pole positions in F1']
  },
  {
    id: 3,
    name: 'Lando Norris',
    team: 'McLaren',
    number: 4,
    image: '/drivers/norris.jpg',
    stats: {
      wins: 2,
      poles: 3,
      podiums: 16,
      championships: 0
    },
    highlights: ['2023 Qatar GP Winner', 'Rising McLaren star', 'Multiple podium finishes']
  }
];

const featuredCircuits = [
  {
    id: 1,
    name: 'Silverstone Circuit',
    location: 'United Kingdom',
    image: '/circuits/silverstone.jpg',
    stats: {
      length: '5.891 km',
      corners: 18,
      lapRecord: '1:27.097',
      recordHolder: 'Max Verstappen',
      firstRace: 1950
    },
    features: ['High-speed corners', 'Historic venue', 'Iconic Maggotts-Becketts complex']
  },
  {
    id: 2,
    name: 'Circuit de Monaco',
    location: 'Monaco',
    image: '/circuits/monaco.jpg',
    stats: {
      length: '3.337 km',
      corners: 19,
      lapRecord: '1:12.909',
      recordHolder: 'Lewis Hamilton',
      firstRace: 1950
    },
    features: ['Street circuit', 'Tight corners', 'Iconic tunnel section']
  },
  {
    id: 3,
    name: 'Suzuka Circuit',
    location: 'Japan',
    image: '/circuits/suzuka.jpg',
    stats: {
      length: '5.807 km',
      corners: 18,
      lapRecord: '1:30.983',
      recordHolder: 'Lewis Hamilton',
      firstRace: 1987
    },
    features: ['Figure-8 layout', 'High-speed esses', 'Iconic 130R corner']
  }
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Loading animation component
const LoadingSpinner = () => (
  <motion.div 
    className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time for the page, can be removed if not needed, might use useSWR for this
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section  */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/f1-hero.jpg')] bg-cover bg-center opacity-99"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-gradient">RewindGP</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-bold" style={{ textShadow: '0 0 1px #000, 0 0 1px #000, 0 0 1px #000, 0 0 1px #000' }}>
              Your ultimate destination for Formula 1 racing history, statistics, and live updates.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/races" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Races
              </Link>
              <Link href="/circuits" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Circuits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <stat.icon className={`text-5xl mb-6 ${stat.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-xl text-gray-300 mb-2">{stat.title}</p>
                <p className="text-gray-400">{stat.description}</p>
                <p className="text-sm text-gray-500 mt-2">{stat.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Races Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Races
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredRaces.map((race) => (
              <motion.div 
                key={race.id}
                variants={item}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="relative h-72 bg-gray-800">
                  <Image
                    src={race.image}
                    alt={race.title}
                    fill
                    priority={race.id === 1}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center 100%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    {race.category}
                  </div>
                  <div className="absolute bottom-0 left-0 flex items-center gap-2 pl-3 pb-2">
                    <FaStar className="text-yellow-500" />
                    <span className="text-white font-medium bg-black/50 px-2 py-0.5 rounded">{race.rating}</span>
                    <span className="text-white bg-black/50 px-2 py-0.5 rounded ml-2">{race.views} views</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{race.title}</h3>
                  <p className="text-gray-300 mb-4">{race.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{race.date}</span>
                    <span>{race.circuit}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Top Drivers</h4>
                    <div className="flex gap-2">
                      {race.drivers.map((driver, index) => (
                        <span key={index} className="bg-white/10 px-2 py-1 rounded text-sm">
                          {driver}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <FaClock /> {race.duration}
                    </span>
                    <Link href={`/races/${race.id}`} className="text-red-500 hover:text-red-400 flex items-center gap-1">
                      Watch Now <FaChevronRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Drivers Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Drivers
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredDrivers.map((driver) => (
              <motion.div 
                key={driver.id}
                variants={item}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="relative h-72 bg-gray-800">
                  <Image
                    src={driver.image}
                    alt={driver.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center 100%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    #{driver.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{driver.name}</h3>
                  <p className="text-gray-300 mb-4">{driver.team}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(driver.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-2xl font-bold">{value}</p>
                        <p className="text-sm text-gray-400 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Highlights</h4>
                    <ul className="space-y-1">
                      {driver.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                          <FaMedal className="text-yellow-500" /> {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/drivers/${driver.id}`} className="text-red-500 hover:text-red-400 flex items-center gap-1">
                    View Profile <FaChevronRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Circuits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Circuits
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredCircuits.map((circuit) => (
              <motion.div 
                key={circuit.id}
                variants={item}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="relative h-72 bg-gray-800">
                  <Image
                    src={circuit.image}
                    alt={circuit.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {circuit.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{circuit.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(circuit.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-sm text-gray-400 capitalize">{key}</p>
                        <p className="text-lg font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {circuit.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                          <FaStar className="text-yellow-500" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/circuits/${circuit.id}`} className="text-red-500 hover:text-red-400 flex items-center gap-1">
                    View Circuit <FaChevronRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Race Categories
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <category.icon className={`text-5xl mb-6 ${category.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <p className="text-3xl font-bold mb-4">{category.count}</p>
                <div className="space-y-2">
                  {category.featured.map((race, index) => (
                    <p key={index} className="text-sm text-gray-400">{race}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest race updates, exclusive content, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}