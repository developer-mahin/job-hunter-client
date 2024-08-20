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

    getMyPosts: builder.query({
      query: () => {
        return {
          url: `/post/my_posts`,
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

    deletePost: builder.mutation({
      query: (payload) => {
        return {
          url: `/post/delete_post/${payload.postId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.post],
    }),

    updatePost: builder.mutation({
      query: (payload) => {
        return {
          url: `/post/update_post/${payload.postId}`,
          method: "PATCH",
          data: payload.postInfo,
        };
      },
      invalidatesTags: [tagTypes.post],
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetMyPostsQuery, 
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
