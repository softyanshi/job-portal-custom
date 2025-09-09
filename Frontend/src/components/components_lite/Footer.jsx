import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-900 dark:to-pink-800 text-gray-100 py-10 mt-10 shadow-inner transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-bold">Sunfire Sensei</span>. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            Powered by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/softyanshi"
              className="text-white hover:text-gray-200 font-semibold transition-colors"
            >
              Anshika Tripathi
            </a>
          </p>
        </motion.div>

        {/* Right Section - Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center text-sm space-y-2 md:space-y-0 md:space-x-4"
        >
          <Link
            to="/PrivacyPolicy"
            className="hover:underline hover:text-gray-200 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="hidden md:inline">|</span>
          <Link
            to="/TermsofService"
            className="hover:underline hover:text-gray-200 transition-colors"
          >
            Terms of Service
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

