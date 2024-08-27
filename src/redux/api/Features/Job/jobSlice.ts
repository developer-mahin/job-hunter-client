import { TJob } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type TJobState = {
  job: TJob | null;
};

const initialState: TJobState = {
  job: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload;
    },
  },
});

export const { setJob } = jobSlice.actions;
export default jobSlice.reducer;
