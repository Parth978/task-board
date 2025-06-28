import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./userMenu";
import { checkUser } from "@/lib/checkUser";
import UserLoader from "./userLoader";

const Header = async () => {

  await checkUser();
  return (
    <header>
      <nav className="flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/logo-alternate.png"
            alt="Logo"
            width={200}
            height={200}
            className="h-20 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="destructive">
            <Link href="/projects/create" className="text-white flex gap-2">
              <PenBox size={10} />
              <span>Create Project</span>
            </Link>
          </Button>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoader />
    </header>
  );
};

export default Header;
