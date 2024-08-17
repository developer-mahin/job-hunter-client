import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => {
        return {
          url: `/user/my_profile`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),

    updateUserProfile: builder.mutation({
      query: (payload) => {
        return {
          url: `/user/update_user/${payload?.id}`,
          method: "PATCH",
          data: payload.data,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateUserProfileMutation } = userApi;
