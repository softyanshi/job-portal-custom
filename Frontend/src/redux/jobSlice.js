import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload; // Update state with fetched jobs
    },
  },
});

export const { setAllJobs } = jobSlice.actions;
export default jobSlice.reducer;
