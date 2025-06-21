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

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={100}
            objectFit="contain"
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
    </header>
  );
};

export default Header;
