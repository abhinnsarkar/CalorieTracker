// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import icon from "./icon.png";
// import { SignedIn, UserButton } from "@clerk/nextjs";

// export default function Header() {
//     return (
//         <header className="w-full border-b border-border/50 backdrop-blur-md bg-background/60 fixed top-0 left-0 right-0 z-50">
//             <div className="max-w-screen-xl mx-auto h-16 flex items-center justify-between layout-x-padding">
//                 {/* Left - Logo */}
//                 <div className="flex items-center justify-start h-full">
//                     <Link href={"/"}>
//                         <span className="text-xl gradient-text">
//                             <Image
//                                 src={icon}
//                                 alt="logo"
//                                 width={40}
//                                 height={40}
//                                 priority
//                                 className="mr-2 rounded-full"
//                             />
//                             BrownBite
//                         </span>
//                     </Link>
//                 </div>

//                 <SignedIn>
//                     <UserButton
//                         userProfileMode="navigation"
//                         userProfileUrl="/profile"
//                         appearance={{
//                             variables: {
//                                 // colorBackground: "hsl(var(--background))",
//                                 colorBackground: "#0e1729",
//                                 colorText: "white",

//                                 colorInputBackground: "transparent",
//                             },
//                             elements: {
//                                 userButtonPopoverCard: {
//                                     backgroundColor: "#0e1729",
//                                     color: "white",
//                                     border: "1px solid rgba(255,255,255,0.15)",
//                                     borderRadius: "12px",
//                                     boxShadow: "0 0 20px rgba(255,255,255,0.1)",
//                                 },
//                                 userButtonPopoverActionButton: {
//                                     color: "white",
//                                     fontWeight: "500",
//                                     "&:hover": {
//                                         backgroundColor:
//                                             "rgba(255,255,255,0.1)",
//                                     },
//                                 },
//                                 userButtonPopoverHeader: {
//                                     color: "white",
//                                 },
//                                 userButtonPopoverEmail: {
//                                     color: "rgba(255,255,255,0.6)",
//                                 },
//                                 userButtonPopoverFooter: {
//                                     display: "none",
//                                 },
//                             },
//                         }}
//                     />
//                 </SignedIn>
//             </div>
//         </header>
//     );
// }
import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/icon.png";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <header className="w-full border-b border-border/50 backdrop-blur-md bg-background/60 fixed top-0 left-0 right-0 z-50">
            <div className="layout-grid layout-grid-1 h-16 items-center px-4 sm:px-6 md:px-10 flex flex-row">
                {/* Left - Logo */}
                <div className="layout-section w-1/2 flex items-center h-full">
                    <Link href={"/"}>
                        <span className="text-xl gradient-text flex items-center">
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

                {/* Right - User Button */}
                <SignedIn>
                    <div className="layout-section w-1/2 flex justify-end h-full">
                        <UserButton
                            userProfileMode="navigation"
                            userProfileUrl="/profile"
                            appearance={{
                                variables: {
                                    colorBackground: "#0e1729",
                                    colorText: "white",
                                    colorInputBackground: "transparent",
                                },
                                elements: {
                                    userButtonPopoverCard: {
                                        backgroundColor: "#0e1729",
                                        color: "white",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        borderRadius: "12px",
                                        boxShadow:
                                            "0 0 20px rgba(255,255,255,0.1)",
                                    },
                                    userButtonPopoverActionButton: {
                                        color: "white",
                                        fontWeight: "500",
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(255,255,255,0.1)",
                                        },
                                    },
                                    userButtonPopoverHeader: {
                                        color: "white",
                                    },
                                    userButtonPopoverEmail: {
                                        color: "rgba(255,255,255,0.6)",
                                    },
                                    userButtonPopoverFooter: {
                                        display: "none",
                                    },
                                },
                            }}
                        />
                    </div>
                </SignedIn>
            </div>
        </header>
    );
}
