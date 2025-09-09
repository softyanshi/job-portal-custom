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

  const { loading } = useSelector((store) => store.auth);
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

  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  
   return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="flex items-center  justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 transition-colors duration-300"
        >
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
            Register
          </h1>

          <div className="space-y-4">
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Full Name</Label>
              <Input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">Email</Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="johndoe@gmail.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">Password</Label>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="********"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">PAN Card Number</Label>
              <Input
                type="text"
                name="pancard"
                value={input.pancard}
                onChange={changeEventHandler}
                placeholder="ABCDEF1234G"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">Adhar Card Number</Label>
              <Input
                type="text"
                name="adharcard"
                value={input.adharcard}
                onChange={changeEventHandler}
                placeholder="123456789012"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">Phone Number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                placeholder="+1234567890"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">Role</Label>
              <RadioGroup className="flex items-center gap-6 mt-2">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === "Student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label className="text-gray-700 dark:text-gray-300">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === "Recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label className="text-gray-700 dark:text-gray-300">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-gray-700 dark:text-gray-300">Profile Photo</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={ChangeFilehandler}
                className="mt-1 cursor-pointer"
              />
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center my-6">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 border-b-4"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
            >
              Register
            </button>
          )}

          <p className="text-center text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 dark:text-blue-400 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
