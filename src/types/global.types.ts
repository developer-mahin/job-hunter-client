import { userRole } from "@/constant/userRole";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TResponseSuccessType = {
  data: any;
  meta?: TMeta;
  message: string;
  success: boolean;
  statusCode: number;
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TUserRole = keyof typeof userRole;

export type TAuthUser = {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type TUserInfo = {
  city: string;
  website: string;
  country: string;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  status: "active" | "inactive";
  role: "user" | "admin" | "moderator";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  info: TUserInfo;
};
