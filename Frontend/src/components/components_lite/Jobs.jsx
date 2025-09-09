import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./Filtercard";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {  AnimatePresence } from "framer-motion";
import Footer from "./Footer";
const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    // If no search query is provided, reset to all jobs
    //     if (searchedQuery)
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }

    // Filter based on the searched query across various fields (title, description, etc.)
    const filteredJobs = allJobs.filter((job) => {
      const query = searchedQuery.toLowerCase();
      return (
        job.title?.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query) ||
        job.experience?.toLowerCase().includes(query) ||
        job.salary?.toLowerCase().includes(query)
      );
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">

           {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4">
            
            <FilterCard />
          </aside>


           {/* Jobs Section */}
          <main className="flex-1">
            {filterJobs.length <= 0 ? (
              <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <motion.img
                  src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                  alt="No jobs"
                  className="w-40 h-40 mb-6 opacity-80"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  No jobs found
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Try adjusting your filters or search for something else.
                </p>
              </div>
            ) : (
              <div className="h-[88vh] overflow-y-auto pb-5 pr-2 custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {filterJobs.map((job) => (
                      <motion.div
                       key={job.id}
      className="h-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
                      >
                        <Job1 job={job} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </main>

         
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Jobs;
