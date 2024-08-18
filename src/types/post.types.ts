import { TUser } from "./global.types";

export type TComment = {
  _id: string;
  commentBody: string;
  image?: string;
  user: TUser;
};

export type TLike = {
  user: TUser;
};

export type TPost = {
  _id: string;
  postDetails: string;
  image?: string;
  postCategory?: string;
  comments?: TComment[];
  author: TUser;
  likes?: TLike[];
  dislikes?: TUser[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
