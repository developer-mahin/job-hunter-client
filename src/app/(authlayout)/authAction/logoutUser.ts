import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeUserInfo } from "./auth.service";
import { removeCookies } from "@/utils/removeCookies";
import { authKey } from "@/constant/authKey";

export const logoutUser = (router?: AppRouterInstance) => {
  removeUserInfo();
  removeCookies([authKey.ACCESS_TOKEN, authKey.REFRESH_TOKEN]);
  router?.push("/");
  router?.refresh();
};
