import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const JobApply = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJobApply: builder.mutation({
      query: (payload) => {
        return {
          url: `/job_apply/${payload.jobId}`,
          method: "POST",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.job],
    }),
  }),
});

export const { useCreateJobApplyMutation } = JobApply;
