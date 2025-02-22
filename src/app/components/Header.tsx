import React from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50 bg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Link href={"/"}>
                            <span className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                                BrownBite
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <SignedOut>
                            <SignInButton>
                                <Button
                                    variant="outline"
                                    className="text-sm border-blue-400/30 text-blue-100 hover:bg-blue-950/50"
                                >
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
        </header>
    );
}
