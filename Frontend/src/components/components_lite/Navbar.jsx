import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/logout`,
        {},
        { withCredentials: true }
      );

      if (res?.data?.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Logout error:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-[#6B3AC2]">Job</span>
            <span className="text-[#FA4F09]">Portal</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex font-medium items-center gap-8 text-gray-700 dark:text-gray-200">
          {user && user.role === "Recruiter" ? (
            <>
              <li>
                <Link
                  to="/admin/companies"
                  className="hover:text-[#6B3AC2] transition"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/jobs"
                  className="hover:text-[#6B3AC2] transition"
                >
                  Jobs
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Home" className="hover:text-[#6B3AC2] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Browse" className="hover:text-[#6B3AC2] transition">
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  to="/saved-jobs"
                  className="hover:text-[#6B3AC2] transition"
                >
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link to="/Jobs" className="hover:text-[#6B3AC2] transition">
                  Jobs
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {!user ? (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-gray-300 dark:ring-gray-600 hover:scale-105 transition">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullname || "User"}
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="flex items-center gap-4 border-b pb-3 mb-3">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname}
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{user?.fullname}</h3>
                   
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
                  {user?.role === "Student" && (
                    <Link
                      to="/Profile"
                      className="flex items-center gap-2 hover:text-[#6B3AC2] transition"
                    >
                      <User2 size={18} /> Profile
                    </Link>
                  )}
                  <button
                    onClick={logoutHandler}
                    className="flex items-center gap-2 hover:text-red-600 transition"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}

          {/* Mobile Menu (Hamburger) */}
          <div className="md:hidden">
            <Menu className="w-6 h-6 cursor-pointer text-gray-700 dark:text-gray-200" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
