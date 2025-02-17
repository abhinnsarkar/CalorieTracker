import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Button,
} from "@mui/material";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <AppBar
            position="sticky"
            sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "none",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, fontWeight: 600, color: "#ffffff" }}
                    >
                        Calorie Tracker
                    </Typography>
                    <Box>
                        <SignedOut>
                            <SignInButton>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "#ffffff",
                                        borderColor: "rgba(255, 255, 255, 0.5)",
                                    }}
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
