import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.jobs?.allJobs || []);

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      

      {/* Job Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        {allJobs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            🚀 No Job Available at the moment
          </p>
        ) : (
          allJobs.slice(0, 6).map((job) =>
            job?._id ? (
              <div key={job._id} className="h-full">
                <JobCards job={job} />
              </div>
            ) : (
              <span key={Math.random()} className="text-red-500">
                Invalid Job Data
              </span>
            )
          )
        )}
      </div>

      {/* CTA button */}
      {allJobs.length > 6 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => (window.location.href = "/jobs")}
            className="px-6 py-3 rounded-lg font-semibold 
                       bg-[#6A38C2] text-white hover:bg-[#5a2ea8] 
                       dark:bg-purple-600 dark:hover:bg-purple-500 
                       shadow-md transition-all"
          >
            View All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestJobs;

