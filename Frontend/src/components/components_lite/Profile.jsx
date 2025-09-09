import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen, FileDown } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";
import EditProfileModal from "./EditProfileModal";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAllAppliedJobs";
import Footer from "./Footer";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white border dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-2xl my-8 p-8 shadow-lg transition hover:shadow-xl dark:shadow-gray-800">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer h-24 w-24 ring-2 ring-gray-300 dark:ring-gray-700">
              <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
            </Avatar>
            <div>
              <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
                {user?.fullname}
              </h1>

               <p className="text-gray-600 dark:text-gray-400">
                {user?.profile?.bio || "No bio provided"}
              </p>
            
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Pen size={16} /> Edit
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-6 space-y-3">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Mail size={18} />
            <a
              href={`mailto:${user?.email}`}
              className="hover:underline break-all"
            >
              {user?.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Contact size={18} />
            <a href={`tel:${user?.phoneNumber}`} className="hover:underline">
              {user?.phoneNumber || "Not Provided"}
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="my-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills?.length > 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500 dark:text-gray-400">No skills added</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="my-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Resume
          </h2>
          {user?.profile?.resume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FileDown size={18} />
              {user?.profile?.resumeOriginalName || "Download Resume"}
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">
              No Resume Uploaded
            </span>
          )}
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Applied Jobs
        </h2>
        <AppliedJob />
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal open={open} setOpen={setOpen} />
      <Footer/>
    </div>
  );
};

export default Profile;
