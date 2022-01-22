import {
    AppBar,
    Container,
    Box,
    Toolbar,
    Link,
    Typography
} from "@mui/material";
import Image from "next/image";
import theme from "../styles/theme";

export default function NavBar() {
    return (
        <>
            <AppBar position="sticky">
                <Container>
                    <Toolbar disableGutters>
                        <Link href="/" variant="h4" color="inherit" underline="hover" display="flex" justifyContent="center" alignItems="center">
                            <Image src="/logo-transparent.png" width="64px" height="64x" />
                            Incrie Technologies
                        </Link>
                        <div className={theme.grow} />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}