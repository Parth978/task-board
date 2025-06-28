"use client";
import { useOrganization, useUser } from "@clerk/nextjs"
import { BarLoader } from "react-spinners";

export const UserLoader = () => {
    const { isLoaded } = useOrganization();
    const { isLoaded : isUserLoaded} = useUser();

    if (!isLoaded || !isUserLoaded) {
        return <div><BarLoader /></div>;
    }else {
        return <></>;
    }
}

export default UserLoader;