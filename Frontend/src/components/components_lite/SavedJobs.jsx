import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import JobCards from "./JobCards";
import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";  

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  // Load saved jobs
  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  // Remove job from saved list
  const handleRemove = (jobId) => {
    const updatedJobs = savedJobs.filter((job) => job._id !== jobId);
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50/40 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Saved Jobs Section */}
      <div className="max-w-7xl mx-auto w-full px-6 py-12 flex-1">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-purple-600 dark:text-purple-400">⭐ Saved</span>{" "}
            Jobs
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Quickly access and manage the opportunities you’ve bookmarked for later.
          </p>
        </div>

        {/* Empty State */}
        {savedJobs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <img
              src="https://illustrations.popsy.co/gray/folder.svg"
              alt="No saved jobs"
              className="w-56 h-56 mb-6 opacity-80 dark:opacity-60"
            />
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
              You haven’t saved any jobs yet.
            </p>
            <p className="mt-2 text-gray-400 dark:text-gray-500">
              Browse jobs and click <span className="font-semibold">Save</span> to add them here.
            </p>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {savedJobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative group"
                >
                  <JobCards job={job} />

                  {/* Remove Button (animated fade-in on hover) */}
                  <motion.button
                    onClick={() => handleRemove(job._id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-3 right-3 flex items-center gap-1 
                               text-sm px-3 py-1.5 rounded-full
                               border border-gray-200 dark:border-gray-700 
                               bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                               text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 
                               transition-all shadow-md opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default SavedJobs;



