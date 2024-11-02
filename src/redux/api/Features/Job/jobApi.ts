import { TQueryParams } from "@/types";
import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJob: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        args?.forEach((item: TQueryParams) => {
          params.append(item.name, item.value as string);
        });

        return {
          url: `/job/get_all_jobs`,
          method: "GET",
          params: params,
        };
      },
      providesTags: [tagTypes.job],
    }),

    getMyJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        args?.forEach((item: TQueryParams) => {
          params.append(item.name, item.value as string);
        });

        return {
          url: `/job/get_all_my_jobs`,
          method: "GET",
          params: params,
        };
      },
      providesTags: [tagTypes.job],
    }),

    getSingleJob: builder.query({
      query: (payload) => {
        return {
          url: `/job/get_single_job/${payload}`,
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
          url: `/job/delete_job/${payload}`,
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
  useGetSingleJobQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
  useUpdateJobMutation,
} = jobApi;
