"use client";

import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "h-10 w-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Organizations"
          labelIcon={<ChartNoAxesGantt size={10} />}
          href="/onboarding"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;
