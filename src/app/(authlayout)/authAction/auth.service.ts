import { authKey } from "@/constant/authKey";
import { decodedToken } from "@/utils/decodeToken";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey.ACCESS_TOKEN, accessToken);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authKey.ACCESS_TOKEN);
  let decodedData: any;
  if (accessToken) {
    decodedData = decodedToken(accessToken);
  }
  return {
    ...decodedData,
    role: decodedData?.role?.toLowerCase(),
  };
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey.ACCESS_TOKEN);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUserInfo = () => {
  return removeFromLocalStorage(authKey.ACCESS_TOKEN);
};

// export const getNewAccessToken = async () => {
//   return await axiosInstance({
//     url: "http://localhost:5000/api/v1/auth/refresh-token",
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     withCredentials: true,
//   });
// };
