import { TJob } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type TJobState = {
  job: TJob | null;
  jobId: string;
};

const initialState: TJobState = {
  job: null,
  jobId: "",
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
  },
});

export const { setJob, setJobId } = jobSlice.actions;
export default jobSlice.reducer;
