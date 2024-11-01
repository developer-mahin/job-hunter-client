import { TJob } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type TJobState = {
  job: TJob | null;
  jobId: string;
  searchTerm: string;
  currentPage: number;
  limit: number;
};

const initialState: TJobState = {
  job: null,
  jobId: "",
  currentPage: 1,
  limit: 8,
  searchTerm: "",
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
  },
});

export const { setJob, setJobId, setLimit, setCurrentPage } = jobSlice.actions;
export default jobSlice.reducer;
