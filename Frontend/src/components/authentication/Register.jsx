import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    pancard: "",
    adharcard: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const ChangeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("pancard", input.pancard);
    formData.append("adharcard", input.adharcard);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
            Create an Account ✨
          </h1>

          <div className="space-y-4">
            {/* Fullname */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Full Name</Label>
              <Input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                placeholder="John Doe"
                className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            {/* Email */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Email</Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="johndoe@gmail.com"
                className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            {/* Password */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Password</Label>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="********"
                className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            {/* PAN */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">PAN Card Number</Label>
              <Input
                type="text"
                name="pancard"
                value={input.pancard}
                onChange={changeEventHandler}
                placeholder="ABCDE1234F"
                className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            {/* Aadhar */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Aadhar Card Number</Label>
              <Input
                type="text"
                name="adharcard"
                value={input.adharcard}
                onChange={changeEventHandler}
                placeholder="123456789012"
                className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            {/* Phone */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Phone Number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                placeholder="+91 9876543210"
                className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            {/* Role */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Select Role</Label>
              <RadioGroup className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === "Student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <span className="text-gray-600 dark:text-gray-300">Student</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === "Recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <span className="text-gray-600 dark:text-gray-300">Recruiter</span>
                </label>
              </RadioGroup>
            </div>

            {/* File Upload */}
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Profile Photo</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={ChangeFilehandler}
                className="mt-1 cursor-pointer dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>
          </div>

          {/* Submit Button */}
          {loading ? (
            <div className="flex items-center justify-center my-6">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 border-b-4"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3 my-4 text-white font-semibold rounded-xl 
                         bg-gradient-to-r from-blue-500 to-blue-700 
                         hover:from-blue-600 hover:to-blue-800 
                         transition-all duration-300 shadow-md"
            >
              Register
            </button>
          )}

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="px-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Redirect to Login */}
          <p className="text-center text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

