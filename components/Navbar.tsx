import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur border-b border-border shadow-sm py-2 px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/globe.svg"
            alt="Globe Logo"
            width={28}
            height={28}
            className="rounded ml-1"
          />

          <span className="font-bold text-lg tracking-tight">Todo Manager</span>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
