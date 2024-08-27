import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJob: builder.query({
      query: () => {
        return {
          url: `/job/get_all_jobs`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.job],
    }),

    getMyJobs: builder.query({
      query: () => {
        return {
          url: `/job/my_jobs`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.job],
    }),

    getUserJob: builder.query({
      query: (payload) => {
        return {
          url: `/job/user_job/${payload.id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.job],
    }),

    createJob: builder.mutation({
      query: (payload) => {
        return {
          url: "/job/create_job",
          method: "POST",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.job],
    }),

    deleteJob: builder.mutation({
      query: (payload) => {
        return {
          url: `/job/delete_job/${payload.jobId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.job],
    }),

    updateJob: builder.mutation({
      query: (payload) => {
        return {
          url: `/job/update_job/${payload.jobId}`,
          method: "PATCH",
          data: payload.jobInfo,
        };
      },
      invalidatesTags: [tagTypes.job],
    }),
  }),
});

export const {
  useGetAllJobQuery,
  useGetMyJobsQuery,
  useGetUserJobQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
  useUpdateJobMutation,
} = jobApi;
