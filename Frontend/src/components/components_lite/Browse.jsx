import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchedQuery(searchTerm));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-gray-100">
            Browse Opportunities
          </h1>
          <div className="mt-3 flex justify-center">
            <span className="h-1 w-20 bg-gradient-to-r from-[#7209b7] to-[#f72585] rounded-full"></span>
          </div>

          <form
  onSubmit={handleSearch}
  className="mt-6 flex justify-center"
>
  <div className="relative w-full sm:w-96">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search jobs by title"
      className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-[#7209b7] 
                 dark:bg-gray-800 dark:text-gray-200 
                 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
    />
    {/* Search Icon */}
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
      🔍
    </span>
    <button
      type="submit"
      className="absolute right-2 top-1/2 -translate-y-1/2 
                 bg-gradient-to-r from-[#7209b7] to-[#f72585] 
                 text-white px-4 py-2 rounded-full text-sm font-medium 
                 hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      Search
    </button>
  </div>
</form>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            {allJobs.length > 0
              ? `We found ${allJobs.length} jobs for you 🎯`
              : "No jobs found. Try adjusting your search or filters."}
          </p>
        </div>

        {/* Jobs Grid */}
        <AnimatePresence>
          {allJobs.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {allJobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Job1 job={job} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <img
                src="https://illustrations.popsy.co/gray/marketplace.svg"
                alt="No jobs"
                className="w-60 h-60 mb-6 opacity-80 dark:opacity-60"
              />
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Sorry, no results found. Try searching with different keywords 🔍
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer/>
    </div>
  );
};

export default Browse;
