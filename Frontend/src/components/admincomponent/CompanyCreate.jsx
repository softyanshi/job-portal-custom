import React from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const CompanyCreate = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold text-2xl ">
          Company Name
        </h1>
        <p className="text-gray-600">
            Company Description
        </p>
        <Label>Company Name</Label>
        <Input type="text" placeholder="Company Name" className="my-2"/>
      </div>
    </div>
  );
};

export default CompanyCreate;
