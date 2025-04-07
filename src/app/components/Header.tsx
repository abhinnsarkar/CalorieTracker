import React from "react";
// import { Button } from "@/components/ui/button";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import icon from "./icon.png";

export default function Header() {
    return (
        <header className="w-full border-b border-border/50 backdrop-blur-md bg-background/60 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-screen-xl mx-auto h-16 flex items-center justify-between layout-x-padding">
                {/* Left - Logo */}
                <div className="flex items-center justify-start h-full">
                    <Link href={"/"}>
                        <span className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent flex flex-row items-center">
                            <Image
                                src={icon}
                                alt="logo"
                                width={40}
                                height={40}
                                priority
                                className="mr-2 rounded-full"
                            />
                            BrownBite
                        </span>
                    </Link>
                </div>

                {/* Right - Auth */}
                {/* <div className="flex items-center justify-end h-full space-x-4">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="outline" className="hover-btn">
                                Sign In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div> */}
            </div>
        </header>
    );
}
