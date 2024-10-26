import { TQueryParams } from "@/types";
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

    getSingleUserData: builder.query({
      query: (payload) => {
        return {
          url: `/user/single_user/${payload.id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),

    getAllUserData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        args?.forEach((item: TQueryParams) => {
          params.append(item.name, item.value as string);
        });

        return {
          url: `/user/all_users`,
          method: "GET",
          params: params,
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

    changeUserRole: builder.mutation({
      query: () => {
        return {
          url: `/user/change_user_role`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    followAndUnFollow: builder.mutation({
      query: (payload) => {
        return {
          url: `/user/follow/${payload}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useGetSingleUserDataQuery,
  useGetAllUserDataQuery,
  useUpdateUserProfileMutation,
  useChangeUserRoleMutation,
  useFollowAndUnFollowMutation,
} = userApi;
