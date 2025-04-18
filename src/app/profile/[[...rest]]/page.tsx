"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"; // shadcn
import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

export default function ProfileDialog() {
    const [open, setOpen] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!open) {
            router.push("/");
        }
    }, [open, router]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[95%] h-[95%] max-w-5xl overflow-y-auto overflow-x-hidden bg-[#0e1729] border border-white/10 mx-auto px-0 sm:px-6">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <VisuallyHidden>
                        <DialogTitle className="text-white text-lg">
                            Account Settings
                        </DialogTitle>
                    </VisuallyHidden>

                    <Link
                        href="/"
                        className="text-sm rounded-md px-3 py-12 my-10 mt-12 sm:mt-0 ml-4 sm:ml-8 mr-4 sm:mr-0 w-full sm:w-auto hover-btn hover:text-white"
                    >
                        {/* <Button className="hover-btn !justify-start"> */}
                        <ArrowBackIosIcon className="!text-sm" />
                        Back to Dashboard
                        {/* </Button> */}
                    </Link>
                </DialogHeader>
                <div className="w-full max-w-full  sm:max-w-5xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                    <UserProfile
                        appearance={{
                            variables: {
                                colorBackground: "#0e1729",
                                colorText: "white",
                                colorPrimary: "#60a5fa",
                            },
                            elements: {
                                card: {
                                    backgroundColor: "#0e1729",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    borderRadius: "12px",
                                },
                                headerTitle: {
                                    color: "white",
                                },
                                badge: {
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    color: "white",
                                },
                                profileSectionFieldInput: {
                                    backgroundColor: "#111827",
                                    color: "white",
                                },
                                navbar: {
                                    color: "white",
                                },
                                navbarItem: {
                                    color: "white", // ensures inactive tabs like 'Security' are visible
                                    opacity: 0.6,
                                    '&[data-active="true"]': {
                                        color: "white",
                                        opacity: 1,
                                    },
                                },
                                navbarButton: {
                                    color: "white",
                                    opacity: 0.6,
                                    '&[data-active="true"]': {
                                        color: "white",
                                        opacity: 1,
                                    },
                                },
                                deleteSection: {
                                    display: "none",
                                    backgroundColor: "orange",
                                    // border: "none",
                                    // padding: 0,
                                    // boxShadow: "none",
                                },
                                deleteSectionTitle: {
                                    display: "none",
                                },
                                profileSectionDanger: {
                                    backgroundColor: "orange",
                                    // border: "none",
                                    // boxShadow: "none",
                                    display: "none",
                                },
                                profileSectionPrimaryButton__danger: {
                                    color: "#f87171",
                                    backgroundColor: "transparent",
                                    border: "none",
                                    padding: "0",
                                    margin: "-1.5% lg:0",
                                    boxShadow: "none",
                                    textAlign: "left",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    width: "fit-content",
                                },
                                profileSectionPrimaryButton__default: {
                                    backgroundColor: "transparent",
                                    color: "#60a5fa",
                                    border: "none",
                                    padding: "0",
                                    margin: "-3% lg:+3%",
                                    boxShadow: "none",
                                    textAlign: "left",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    width: "fit-content",
                                },
                                footer: {
                                    display: "none",
                                },
                                profileSectionContent__password: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    gap: "0.25rem",
                                    "@media (min-width: 640px)": {
                                        flexDirection: "row",
                                        alignItems: "center",
                                    },
                                },
                                profileSectionContent__danger: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    gap: "0.25rem",
                                    "@media (min-width: 640px)": {
                                        flexDirection: "row",
                                        alignItems: "center",
                                    },
                                },
                                // navbarItem__active: {
                                //     color: "white", // active tab stays white
                                // },
                            },
                        }}
                        routing="hash"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
