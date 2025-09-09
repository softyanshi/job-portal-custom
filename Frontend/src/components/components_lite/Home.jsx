import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Home = () => {
  const { loading, error } = useGetAllJobs();
  const jobs = useSelector((state) => state.jobs.allJobs);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-purple-50/40 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Hero/Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-gray-200 dark:border-gray-800"
      >
        <Header />
      </motion.div>

      {/* Categories */}
      <motion.section
        className="max-w-7xl mx-auto w-full px-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Categories />
      </motion.section>

      {/* Latest Jobs */}
      <section className="max-w-7xl mx-auto w-full px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-purple-600 dark:text-purple-400">
              Latest & Top{" "}
            </span>
            Job Openings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
            Fresh opportunities curated for you
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-400 animate-pulse">
            Loading jobs...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 dark:text-red-400">
            Error: {error}
          </p>
        )}
        {!loading && !error && jobs && jobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <LatestJobs jobs={jobs} />
          </motion.div>
        )}
        {!loading && !error && jobs?.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No jobs available at the moment.
          </p>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

