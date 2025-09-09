import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    
      <header className="w-full text-center py-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
         <div className="flex flex-col gap-6">
          {/* Badge */}
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 dark:bg-gray-800 text-red-600 font-medium shadow-sm">
            <span className="text-[#614232] dark:text-[#d9b08c]">
              
              <PiBuildingOfficeBold size={20}/>
            </span>{" "}
            No.1 Job Hunt Website
          </span>

            {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-snug text-gray-900 dark:text-white">
            Search Apply & <br />
            Get Your <span className="text-[#6A38C2] dark:text-purple-400">Dream Job</span>
          </h2>

            {/* Subtitle */}
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start your hunt for the best, life-changing career opportunities
            from here in your <br />
            selected areas conveniently and get hired quickly.
          </p>

          {/* Search Box */}
          <div  className="flex w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto mt-4 ">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className= "flex-1 h-12 px-4  rounded-l-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 outline-none"
            />
            <Button onClick={searchjobHandler}  className="h-12 rounded-r-full bg-[#6A38C2] hover:bg-[#5a2ea8] text-white dark:bg-purple-600 dark:hover:bg-purple-500 px-6 ">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
   
  );
};

export default Header;
