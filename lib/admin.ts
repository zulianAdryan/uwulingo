import { auth } from "@clerk/nextjs/server";

const ADMIN_IDS = ["user_2sU7lTDJWgX9pLl2hw5PH0GALFh"];

export const isAdmin = async () => {
  const { userId } = await auth();

  if (!userId) return false;

  return ADMIN_IDS.indexOf(userId) !== -1;
};
