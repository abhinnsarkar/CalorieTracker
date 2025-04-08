import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
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
    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <head>
                    <link
                        rel="icon"
                        type="image/png"
                        href="/favicon-96x96.png"
                        sizes="96x96"
                    />
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="BrownBite"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                </head>
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
                        <main>{children}</main>
                    </SignedIn>
                    <Toaster />
                </body>
            </html>
        </ClerkProvider>
    );
}
