import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
import React from "react";
import UserProfilePanel from "./UserProfilePanel";
import db from "@/lib/db";

const SignInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  const user = await getUser();
  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await db.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    return <>{dbUser!! && <UserProfilePanel user={dbUser} />}</>;
  }

  return (
    <div className="flex gap-3">
      <Button color="primary">
        <LoginLink>Sign In</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default SignInPanel;
