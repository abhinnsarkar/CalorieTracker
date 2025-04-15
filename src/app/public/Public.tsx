import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Public() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Push content below the header */}
            <div className="my-auto w-[100%]">
                <div className="h-16" aria-hidden="true" />
                <div className="flex mx-auto  w-[75%]">
                    <span className="mx-auto whitespace-nowrap text-[5vw] font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                        Welcome to BrownBite
                    </span>
                </div>

                {/* Main content section */}
                <main className="flex-none container mx-auto px-4 flex justify-center items-center text-center  py-8">
                    <div className="max-w-lg w-full">
                        {/* Welcome message styled as specified */}

                        <p className="text-lg text-gray-600 mb-8">
                            Ready to take control of your health and fitness?
                            Join us today and start tracking your calories,
                            setting goals, and enjoying healthier meals every
                            day!
                        </p>
                        <p className="text-md text-gray-500 mb-6">
                            Whether you&apos;re looking to lose weight, gain
                            muscle, or just eat healthier, BrownBite offers
                            personalized tools to help you achieve your goals.
                        </p>
                        <div className="mt-6">
                            <SignedOut>
                                <div className="flex justify-between">
                                    <SignUpButton
                                        mode="modal"
                                        appearance={{
                                            elements: {
                                                card: {
                                                    backgroundColor:
                                                        "hsl(var(--accent))",
                                                    borderRadius: "12px",
                                                    padding: "1.25rem",
                                                    animation:
                                                        "fadeIn 0.5s ease-out",
                                                    boxShadow:
                                                        "0 0 12px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
                                                    color: "hsl(var(--foreground))",
                                                },
                                                headerTitle: {
                                                    color: "white",
                                                    fontSize: "1.25rem",
                                                    fontWeight: "600",
                                                },
                                                formFieldInput: {
                                                    backgroundColor:
                                                        "transparent",
                                                    color: "white",
                                                    border: "1px solid white",
                                                    outline:
                                                        "2px solid rgba(255,255,255,0.4)",
                                                    borderRadius: "8px",
                                                    padding: "0.75rem",
                                                    boxShadow:
                                                        "0 0 10px rgba(255,255,255,0.3)",
                                                    "&:hover": {
                                                        transform:
                                                            "scale(1.025)",
                                                        boxShadow:
                                                            "0 0 15px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.3)",
                                                    },
                                                },
                                                formFieldLabel: {
                                                    color: "hsl(var(--foreground))",
                                                },
                                                formButtonPrimary: {
                                                    backgroundColor:
                                                        "hsl(var(--accent))", // keep your dark navy color
                                                    color: "white",
                                                    border: "1px solid white",
                                                    outline:
                                                        "2px solid rgba(255,255,255,0.4)",
                                                    borderRadius: "8px",
                                                    padding: "0.75rem",
                                                    fontWeight: "600",
                                                    transition:
                                                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                                    boxShadow:
                                                        "0 0 10px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.5)",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "hsl(var(--accent))", // <- explicitly keep background the same
                                                        transform:
                                                            "scale(1.025)",
                                                        boxShadow:
                                                            "0 0 15px rgba(255,255,255,0.8), 0 0 15px rgba(255,255,255,0.6)",
                                                    },
                                                },
                                                socialButtonsBlockButton: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    backgroundColor:
                                                        "hsl(var(--accent))",
                                                    // "var(--accent)",
                                                    border: "1px solid white",
                                                    outline:
                                                        "2px solid rgba(255,255,255,0.4)",
                                                    borderRadius: "8px",
                                                    padding: "0.75rem 1.5rem",
                                                    fontWeight: "600",
                                                    textAlign: "center",
                                                    color: "white",
                                                    cursor: "pointer",
                                                    transition:
                                                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                                    boxShadow:
                                                        "0 0 10px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.5)",
                                                    "&:hover": {
                                                        transform:
                                                            "scale(1.025)",
                                                        boxShadow:
                                                            "0 0 15px rgba(255,255,255,0.8), 0 0 15px rgba(255,255,255,0.6)",
                                                    },
                                                },
                                                footerActionText: {
                                                    color: "rgba(255,255,255,0.6)",
                                                },
                                                footerActionLink: {
                                                    color: "#3b82f6",
                                                    fontWeight: "500",
                                                },
                                                footer: {
                                                    display: "none",
                                                },
                                            },
                                        }}
                                    >
                                        <Button className="hover-btn">
                                            Sign Up Now
                                        </Button>
                                    </SignUpButton>
                                    <SignInButton
                                        mode="modal"
                                        appearance={{
                                            elements: {
                                                card: {
                                                    backgroundColor:
                                                        "hsl(var(--accent))",
                                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                                    borderRadius: "12px",
                                                    padding: "1.25rem",
                                                    animation:
                                                        "fadeIn 0.5s ease-out",
                                                    boxShadow:
                                                        "0 0 12px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
                                                    color: "hsl(var(--foreground))",
                                                },
                                                headerTitle: {
                                                    color: "white",
                                                    fontSize: "1.25rem",
                                                    fontWeight: "600",
                                                },
                                                formFieldInput: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    backgroundColor:
                                                        "hsl(var(--accent))",
                                                    // "var(--accent)",
                                                    border: "1px solid white",
                                                    outline:
                                                        "2px solid rgba(255,255,255,0.4)",
                                                    borderRadius: "8px",
                                                    color: "white",

                                                    animation:
                                                        "fadeIn 0.5s ease-out",
                                                    padding: "1rem",
                                                    transition:
                                                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                                    boxShadow:
                                                        "0 0 10px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3)",
                                                    "&:hover": {
                                                        transform:
                                                            "scale(1.025)",
                                                        boxShadow:
                                                            "0 0 15px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.3)",
                                                    },
                                                },
                                                formFieldLabel: {
                                                    color: "hsl(var(--foreground))",
                                                },
                                                formButtonPrimary: {
                                                    backgroundColor:
                                                        "hsl(var(--accent))", // keep your dark navy color
                                                    color: "white",
                                                    border: "1px solid white",
                                                    outline:
                                                        "2px solid rgba(255,255,255,0.4)",
                                                    borderRadius: "8px",
                                                    padding: "0.75rem",
                                                    fontWeight: "600",
                                                    transition:
                                                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                                    boxShadow:
                                                        "0 0 10px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.5)",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "hsl(var(--accent))", // <- explicitly keep background the same
                                                        transform:
                                                            "scale(1.025)",
                                                        boxShadow:
                                                            "0 0 15px rgba(255,255,255,0.8), 0 0 15px rgba(255,255,255,0.6)",
                                                    },
                                                },
                                                socialButtonsBlockButton: {
                                                    backgroundColor:
                                                        "hsl(var(--accent))",
                                                    // "var(--accent)",
                                                    border: "1px solid white",
                                                    outline:
                                                        "2px solid rgba(255,255,255,0.4)",
                                                    borderRadius: "8px",
                                                    color: "white",

                                                    padding: "0.75rem",
                                                    transition:
                                                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                                    boxShadow:
                                                        "0 0 10px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3)",
                                                    "&:hover": {
                                                        transform:
                                                            "scale(1.025)",
                                                        boxShadow:
                                                            "0 0 15px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.3)",
                                                    },
                                                },
                                                footer: {
                                                    display: "none",
                                                },
                                            },
                                        }}
                                    >
                                        <Button className="hover-btn">
                                            Sign In Now
                                        </Button>
                                    </SignInButton>
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <p className="text-lg text-gray-800 mt-4">
                                    You&apos;re all set to track your meals and
                                    progress!
                                </p>
                            </SignedIn>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
