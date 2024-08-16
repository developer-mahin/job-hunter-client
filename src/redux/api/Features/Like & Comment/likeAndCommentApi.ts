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
        console.log(payload.commentBody, "redux");
        return {
          url: `/comment/create_comment/${payload.id}`,
          method: "POST",
          data: payload?.commentBody,
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
} = likeCommentApi;
