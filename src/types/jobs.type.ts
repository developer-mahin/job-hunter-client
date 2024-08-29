import { TUser } from "./global.types";

export type TJob = {
  additionalRequirements: string;
  author: TUser;
  candidate: Array<unknown>;
  companyLogo: string;
  companyName: string;
  createdAt: string;
  location: string;
  website: string;
  description: string | TrustedHTML;
  experience: string;
  jobTitle: string;
  jobType: string;
  skills: string;
  updatedAt: string;
  workPlaceType: string;
  __v: number;
  _id: string;
};
