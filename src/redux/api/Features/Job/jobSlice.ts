import { TJob } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type TJobState = {
  job: TJob | null;
  jobId: string;
  searchTerm: string;
  currentPage: number;
  limit: number;
  experienceLevel: string;
  workPlaceType: string;
  location: string;
  industry: string;
};

const initialState: TJobState = {
  job: null,
  jobId: "",
  currentPage: 1,
  limit: 8,
  searchTerm: "",
  experienceLevel: "",
  workPlaceType: "",
  location: "",
  industry: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload;
    },
    setJobId: (state, action) => {
      state.jobId = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setExperienceLevel: (state, action) => {
      state.experienceLevel = action.payload;
    },

    setWorkPlaceType: (state, action) => {
      state.workPlaceType = action.payload;
    },

    setLocation: (state, action) => {
      state.location = action.payload;
    },

    setIndustry: (state, action) => {
      state.industry = action.payload;
    },
  },
});

export const {
  setJob,
  setJobId,
  setLimit,
  setCurrentPage,
  setSearchTerm,
  setExperienceLevel,
  setWorkPlaceType,
  setLocation,
  setIndustry,
} = jobSlice.actions;
export default jobSlice.reducer;
