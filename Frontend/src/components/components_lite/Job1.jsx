import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";

const Job1 = ({ job, onSave }) => {
  const navigate = useNavigate();

  // ✅ Days ago function
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  // ✅ Save handler
  const handleSave = (e) => {
    e.stopPropagation();
    if (onSave) {
      onSave(job);
    } else {
      let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
      if (!savedJobs.some((saved) => saved._id === job._id)) {
        savedJobs.push(job);
        localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
        alert("✅ Job saved for later!");
      } else {
        alert("⚠️ This job is already saved!");
      }
    }
  };

  return (
    <div
      onClick={() => navigate(`/description/${job?._id}`)}
      className="relative p-6 rounded-3xl shadow-lg 
        bg-white/70 dark:bg-gray-800/70 
        border border-gray-200 dark:border-gray-700 
        backdrop-blur-md
        transition-all duration-500 transform 
        hover:shadow-2xl hover:scale-[1.03] 
        hover:border-[#7209b7]/60 
        cursor-pointer flex flex-col justify-between 
        h-full min-h-[370px]"
    >
      {/* Gradient Glow on Hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#7209b7]/10 via-[#f72585]/10 to-[#3a0ca3]/10 pointer-events-none"></div>

      {/* Header Row */}
      <div className="flex items-center justify-between relative z-10">
        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
          {daysAgoFunction(job?.createdAt) === 0
            ? "📌 Posted Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full dark:border-gray-600 hover:scale-110 hover:bg-[#7209b7]/10 transition-all"
          onClick={handleSave}
        >
          <Bookmark className="h-5 w-5 text-gray-600 dark:text-gray-200" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-4 my-5 relative z-10">
        <Avatar className="h-14 w-14 border border-gray-300 dark:border-gray-600 shadow-sm">
          <AvatarImage src={job?.company?.logo} alt={job?.company?.name} />
        </Avatar>
        <div>
          <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-[#6A38C2] transition-colors">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">India</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="relative z-10">
        <h2 className="font-extrabold text-xl mb-2 text-gray-900 dark:text-gray-100 tracking-tight">
          {job?.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-5 relative z-10">
        <Badge className="text-blue-700 dark:text-blue-400 dark:bg-gray-900 font-medium px-3 py-1 rounded-lg shadow-sm" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] dark:text-[#FF6B6B] dark:bg-gray-900 font-medium px-3 py-1 rounded-lg shadow-sm" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] dark:text-[#9b5de5] dark:bg-gray-900 font-medium px-3 py-1 rounded-lg shadow-sm" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-6 relative z-10">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/description/${job?._id}`);
          }}
          variant="outline"
          className="dark:border-gray-600 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-sm"
        >
          Details
        </Button>
        <Button
          className="bg-gradient-to-r from-[#7209b7] to-[#f72585] 
            dark:from-[#9b5de5] dark:to-[#7209b7] 
            hover:from-[#5a189a] hover:to-[#b5179e] 
            text-white font-medium px-5 py-2 rounded-xl shadow-md 
            hover:shadow-lg transform hover:scale-105 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
            if (!savedJobs.some((saved) => saved._id === job._id)) {
              savedJobs.push(job);
              localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
              alert("✅ Job saved for later!");
            } else {
              alert("⚠️ Job already saved!");
            }
          }}
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job1;

