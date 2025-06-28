import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  try {
    if (!user) {
      return null;
    }

    const loggedInUser = await db?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const newUser = await db?.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0]?.emailAddress || "",
        name: user.fullName || "",
        imageUrl: user.imageUrl || "",
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error checking user:", error);
    return null;
  }
};
