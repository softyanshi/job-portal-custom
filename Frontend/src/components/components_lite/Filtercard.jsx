import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "MERN",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "Frontend",
      "Backend",
      "Mobile",
      "Desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const FilterCard = () => {
  const [openSections, setOpenSections] = useState({
    Location: true,
    Technology: true,
    Experience: true,
    Salary: true,
  });

  const [selectedFilters, setSelectedFilters] = useState({});
  const dispatch = useDispatch();

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckboxChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const current = prev[filterType] || [];
      if (current.includes(value)) {
        return {
          ...prev,
          [filterType]: current.filter((item) => item !== value),
        };
      } else {
        return { ...prev, [filterType]: [...current, value] };
      }
    });
  };

  // Whenever filters change, update Redux search query (you can enhance logic later)
  useEffect(() => {
    const queryString = Object.values(selectedFilters).flat().join(" ");
    dispatch(setSearchedQuery(queryString));
  }, [selectedFilters, dispatch]);

  const clearAll = () => {
    setSelectedFilters({});
    dispatch(setSearchedQuery(""));
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 sticky top-5 h-fit border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          Filters
        </h2>
        <button
          onClick={clearAll}
          className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
        >
          Clear All
        </button>
      </div>

      {filterData.map((section) => (
        <div key={section.filterType} className="mb-4">
          <button
            onClick={() => toggleSection(section.filterType)}
            className="flex justify-between w-full text-gray-700 dark:text-gray-200 font-medium"
          >
            {section.filterType}
            {openSections[section.filterType] ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSections[section.filterType] && (
            <div className="mt-2 space-y-2">
              {section.array.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-md"
                >
                  <input
                    type="checkbox"
                    className="accent-purple-600"
                    checked={selectedFilters[section.filterType]?.includes(item) || false}
                    onChange={() => handleCheckboxChange(section.filterType, item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterCard;