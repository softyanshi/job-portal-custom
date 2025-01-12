import { createSlice } from "@reduxjs/toolkit";
const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: {}, // Initialize with an empty object
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
  },
});

export const { setSingleCompany } = companySlice.actions;

export default companySlice.reducer;

export { companySlice };
