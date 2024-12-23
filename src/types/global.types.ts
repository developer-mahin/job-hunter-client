import { userRole } from "@/constant/userRole";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
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
  tag: string;
};

export type TFollowers = {
  user: TUser;
};

export type TFollowing = {
  user: string;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  coverPhoto: string;
  education: string;
  headline: string;
  about: string;
  followers: TFollowers[];
  following: TFollowing[];
  status: "active" | "inactive";
  role: "user" | "admin" | "moderator";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  info: TUserInfo;
};

export type TSelectItems = {
  key: string;
  label: string;
};

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
