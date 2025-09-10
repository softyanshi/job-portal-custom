import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(setLoading(false)); // Reset loading when page opens
  }, []);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed");
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
      <div className="flex items-center justify-center px-4 py-12">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
          <h1 className="font-bold text-3xl text-center text-blue-600 dark:text-blue-400 mb-6">
            Welcome Back 👋
          </h1>

          {/* Email */}
          <div className="my-4">
            <Label className="text-gray-700 dark:text-gray-300">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="johndoe@gmail.com"
              className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>

          {/* Password */}
          <div className="my-4">
            <Label className="text-gray-700 dark:text-gray-300">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="********"
              className="mt-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>

          {/* Role Selection */}
          <div className="my-4">
            <Label className="text-gray-700 dark:text-gray-300">Select Role</Label>
            <div className="flex gap-6 mt-2">
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
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 my-4 text-white font-semibold rounded-xl 
                       bg-gradient-to-r from-blue-500 to-blue-700 
                       hover:from-blue-600 hover:to-blue-800 
                       transition-all duration-300 shadow-md disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="px-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Register Redirect */}
          <p className="text-center text-gray-700 dark:text-gray-300">
            Don’t have an account?{" "}
            <Link to="/register">
              <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Register here
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

