import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

return (
  <div className="w-full">
    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Explore Categories
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Find jobs tailored to your expertise & passion
      </p>
    </div>

    {/* Categories Carousel */}
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-3">
            <Button
              onClick={() => searchJobHandler(category)}
              variant="outline"
              className="w-full py-6 rounded-xl text-base font-medium 
                shadow-md bg-white border-gray-200 
                dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200
                hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600
                hover:text-white hover:shadow-lg 
                transform hover:scale-[1.03] transition-all duration-300"
            >
              {category}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Controls */}
      <CarouselPrevious className="bg-purple-600 text-white hover:bg-purple-700 shadow-md" />
      <CarouselNext className="bg-purple-600 text-white hover:bg-purple-700 shadow-md" />
    </Carousel>
  </div>
);

};

export default Categories;

