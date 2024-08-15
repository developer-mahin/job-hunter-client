import { getMyProfile } from "@/app/(authlayout)/authAction/myProfile";
import { TUser } from "@/types";
import { useState, useEffect } from "react";

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
