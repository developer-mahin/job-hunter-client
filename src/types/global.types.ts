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

type TUserProfile = {
  id: string;
  userId: string;
  bio: string;
  age: number;
  contactNumber: string;
  photo: string;
  lastDonationDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  userProfile: TUserProfile;
};
