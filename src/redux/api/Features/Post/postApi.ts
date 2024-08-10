import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => {
        return {
          url: `/post/all_post`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.post],
    }),

    createPost: builder.mutation({
      query: (payload) => {
        return {
          url: "/post/create_post",
          method: "POST",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.post],
    }),
  }),
});

export const { useGetAllPostQuery, useCreatePostMutation } = postApi;
