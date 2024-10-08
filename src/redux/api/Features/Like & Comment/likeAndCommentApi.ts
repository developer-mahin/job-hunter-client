import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const likeCommentApi = baseApi.injectEndpoints({
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

    createLike: builder.mutation({
      query: (payload) => {
        return {
          url: `/like/${payload}`,
          method: "POST",
        };
      },
      invalidatesTags: [tagTypes.post],
    }),

    createComment: builder.mutation({
      query: (payload) => {
        return {
          url: `/comment/create_comment/${payload.id}`,
          method: "POST",
          data: payload?.commentBody,
        };
      },
      invalidatesTags: [tagTypes.post],
    }),

    deleteComment: builder.mutation({
      query: (payload) => {
        return {
          url: `/comment/delete_comment/${payload?.postId}`,
          method: "DELETE",
          data: payload?.commentId,
        };
      },
      invalidatesTags: [tagTypes.post],
    }),

    updateComment: builder.mutation({
      query: (payload) => {
        return {
          url: `/comment/update_comment/${payload?.postId}`,
          method: "PATCH",
          data: payload?.commentInfo,
        };
      },
      invalidatesTags: [tagTypes.post],
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useCreateLikeMutation,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = likeCommentApi;
