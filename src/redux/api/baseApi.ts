import { axiosBaseQuery } from "@/helper/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagTypes";
import { baseurl } from "@/constant/baseurl";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `${baseurl}`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
