import React from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50 w-full h-16">
            <div className="flex items-center justify-between h-full w-[90%] mx-auto">
                {/* Left - Logo */}
                <div className="flex items-center justify-start h-full">
                    <Link href={"/"}>
                        <span className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                            BrownBite
                        </span>
                    </Link>
                </div>

                {/* Right - Auth */}
                <div className="flex items-center justify-end h-full space-x-4">
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
                </div>
            </div>
        </div>
    );
}
