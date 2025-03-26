import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Public() {
    console.log("Public Page");
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
                                    <SignInButton>
                                        <Button className="hover-btn">
                                            Sign Up Now
                                        </Button>
                                    </SignInButton>
                                    <SignInButton>
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
