"use client";

import Link from 'next/link'
import { motion } from 'motion/react'
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                RewindGP
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for Formula 1 racing history, statistics, and live updates.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Help Center', 'API Documentation', 'Community Guidelines', 'Feedback'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} RewindGP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 