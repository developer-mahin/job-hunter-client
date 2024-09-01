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

    selectCandidate: builder.mutation({
      query: (payload) => {
        return {
          url: `/job_apply/select_candidate/${payload.jobId}`,
          method: "PATCH",
          data: payload.userId,
        };
      },
      invalidatesTags: [tagTypes.job],
    }),
  }),
});

export const { useCreateJobApplyMutation, useSelectCandidateMutation } =
  JobApply;
