"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  const { user, isLoaded } = useUser();
  const userType = user?.unsafeMetadata?.UserType;
  console.log(userType);
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center w-full max-w-xs">
          <Link href="/" className="flex items-center">
            <Image
              src={"/assets/images/logosvg2.svg"}
              alt={"logo"}
              width={70}
              height={20}
            />
            <span className="text-lg font-semibold ml-1">Events Hub</span>
          </Link>
        </div>

        {/* for desktop navbar*/}
        {isLoaded && userType === "host" && (
          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems></NavItems>
            </nav>
          </SignedIn>
        )}
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* <Button asChild className="rounded-full" size={"lg"}>
            <Link href={"/login"}>SIGN IN</Link>
          </Button> */}

          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
