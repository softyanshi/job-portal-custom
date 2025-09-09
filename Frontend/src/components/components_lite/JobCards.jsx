import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
const JobCards = ({ job }) => {
  const navigate = useNavigate();

  // Save job handler
  const handleSave = (e) => {
    e.stopPropagation(); // Prevent navigation
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    if (!savedJobs.some((saved) => saved._id === job._id)) {
      savedJobs.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      alert("✅ Job saved for later!");
    } else {
      alert("⚠️ Job already saved!");
    }
  };

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-2xl shadow-md border cursor-pointer 
             bg-white border-gray-200 text-gray-800 
             dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 
             hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900 
             transition-all duration-300 group 
             flex flex-col justify-between h-full min-h-[340px] max-h-[420px]"
    >
       {/* Top section */}
      <div className="flex justify-between items-start">
        {/* Company Logo and Name */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border border-gray-300 dark:border-gray-600">
            <AvatarImage src={job.company.logo} alt={job.company.name} />
          </Avatar>
          <div>
            <h1 className="text-lg font-semibold group-hover:text-[#6A38C2] transition-colors">
              {job.company?.name}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">India</p>
          </div>
        </div>

        {/* Save button */}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full dark:border-gray-600 dark:hover:bg-gray-700 hover:scale-110 transition-transform"
          onClick={handleSave}
        >
          <Bookmark className="h-5 w-5" />
        </Button>
      </div>

      {/* Job Info */}
      <div className="mt-4">
        <h2 className="font-bold text-xl mb-1 group-hover:text-[#6A38C2] transition-colors">
          {job.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-3 overflow-hidden">
          {job.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 items-center mt-4">
        <Badge
          className="text-blue-600 dark:text-blue-400 dark:bg-gray-900 font-medium px-3 py-1 rounded-lg"
          variant="ghost"
        >
          {job.position} Openings
        </Badge>
        <Badge
          className="text-[#FA4F09] dark:text-orange-400 dark:bg-gray-900 font-medium px-3 py-1 rounded-lg"
          variant="ghost"
        >
          {job.salary} LPA
        </Badge>
        <Badge
          className="text-[#6B3AC2] dark:text-purple-400 dark:bg-gray-900 font-medium px-3 py-1 rounded-lg"
          variant="ghost"
        >
          {job.location}
        </Badge>
        <Badge
          className="text-gray-800 dark:text-gray-200 dark:bg-gray-900 font-medium px-3 py-1 rounded-lg"
          variant="ghost"
        >
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;

