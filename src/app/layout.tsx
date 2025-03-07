import { SignedIn, SignedOut } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import "./globals.css";
import Public from "./public/Public";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "BrownBite",
    description: " - Abhinn Sarkar",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <Header />
                    <SignedOut>
                        <main>
                            <Public />
                        </main>
                    </SignedOut>
                    <SignedIn>
                        <main>{children}</main>{" "}
                    </SignedIn>
                </body>
            </html>
        </ClerkProvider>
    );
}
