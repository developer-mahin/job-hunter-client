import { TUser } from "./global.types";

export type TJob = {
  author: TUser;
  candidate: Array<unknown>;
  companyLogo: string;
  companyName: string;
  createdAt: string;
  location: string;
  website: string;
  jobDescription: string | TrustedHTML;
  jobTitle: string;
  jobType: string;
  updatedAt: string;
  workPlaceType: string;
  industry: string;
  __v: number;
  _id: string;
};
