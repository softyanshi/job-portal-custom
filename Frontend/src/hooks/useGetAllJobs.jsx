import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import   { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAllJobs() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch all the jobs from the API
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/jobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllJobs();
  }, []);
}

export default useGetAllJobs;
