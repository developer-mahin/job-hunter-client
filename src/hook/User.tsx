import { getMyProfile } from "@/app/(authlayout)/authAction/myProfile";
import { useState, useEffect } from "react";

type TUser = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
  coverPhoto?: string;
  education?: string;
  headline?: string;
  info?: {
    tag?: string;
    website?: string;
    country?: string;
    city?: string;
  };
  passwordUpdatedAt?: Date;
  status: "active" | "blocked";
  role: "user" | "recruiter" | "admin";
  isDeleted: boolean;
};

interface ProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: TUser;
}

const useUserInfo = () => {
  const [userData, setUserData] = useState<ProfileResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUserInfoFromDB = async () => {
    try {
      setIsLoading(true);
      const data = await getMyProfile();
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserInfoFromDB();
  }, []);

  return { userData: userData?.data, isLoading };
};

export default useUserInfo;
