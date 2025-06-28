"use client";
import {
  OrganizationSwitcher,
  SignedIn,
  useOrganization,
  useUser,
} from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { usePathname } from "next/navigation";

const OrgSwitcher = () => {
  const { isLoaded } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const pathname = usePathname();

  if (!isLoaded && !isUserLoaded) {
    return null;
  }
  return (
      <SignedIn>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:slug"
          afterSelectOrganizationUrl="/organization/:slug"
          createOrganizationMode={
            pathname === "/onboarding" ? "navigation" : "modal"
          }
          createOrganizationUrl="/onboarding"
          appearance={{
            baseTheme: neobrutalism,
            elements: {
              organizationSwitcherTrigger: {
                height: "2.5rem !important",
                backgroundColor: "oklch(0.488 0.243 264.376) !important",
                color: "white !important",
                borderRadius: "0.375rem !important",
                padding: "0.5rem 1rem !important",
                fontSize: "1rem !important",
              },
            }
          }}
        />
      </SignedIn>
  );
};

export default OrgSwitcher;
