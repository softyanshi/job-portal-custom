import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import useGetAllCompanies from "@/hooks/usegetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companyslice";
import Footer from "../components_lite/Footer";

const Companies = () => {
  const navigate = useNavigate();

  useGetAllCompanies();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);
  return (
    <div className=" min-h-screen bg-gradient-to-b from-white via-purple-50/40 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <Navbar />
      <div className=" max-w-6xl mx-auto my-10 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <Input
            className="w-full md:w-1/2"
            placeholder="Filter by Company Name"
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <Button 
           className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
          onClick={() => navigate("/admin/companies/create")}>
            Add Company
          </Button>
        </div>
         <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CompaniesTable />
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default Companies;
