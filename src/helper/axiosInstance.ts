import { getNewAccessToken } from "@/app/(authlayout)/authAction/auth.service";
import { authKey } from "@/constant/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import axios from "axios";
import { TGenericErrorResponse, TResponseSuccessType } from "../types";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey.ACCESS_TOKEN);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: TResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      message: response?.data?.message,
      success: response?.data?.success,
      statusCode: response?.status,
    };

    return response;
  },
  async function (error) {
    const config = error.config;

    if (
      (error?.response?.status === 403 || error?.response?.status === 401) &&
      !config.sent
    ) {
      config.sent = true;

      const res = await getNewAccessToken();
      const accessToken = res?.data?.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey.ACCESS_TOKEN, accessToken);
      return instance(config);
    }

    const responseObject: TGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong!!!",
      errorMessages: error?.response?.data?.message,
    };

    return responseObject;
  }
);

export { instance };
