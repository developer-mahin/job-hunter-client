import { TAuthUser } from "@/types";
import { decodedToken } from "./decodeToken";

export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.removeItem(key);
};

export const getUserFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  const token = localStorage.getItem(key);
  let user: TAuthUser | null = null;

  if (token) {
    user = decodedToken(token) as TAuthUser;
  }

  return user;
};
