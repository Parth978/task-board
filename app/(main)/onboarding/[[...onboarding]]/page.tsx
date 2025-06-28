"use client";
import { OrganizationList, useOrganization } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const { organization } = useOrganization();
    const router = useRouter();

    useEffect(() => {
        if (organization) {
            router.push(`/organization/${organization.slug}`);
        }
    }, [organization]);

    return (
    <div className="flex h-full w-full items-center justify-center mt-28">
        <OrganizationList hidePersonal/>
    </div>
    )
}

export default Page;