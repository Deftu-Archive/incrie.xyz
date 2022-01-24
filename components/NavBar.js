import {
    AppBar,
    Container,
    Box,
    Toolbar,
    Link,
    Button
} from "@mui/material";
import theme from "../styles/theme";

export default function NavBar() {
    return (
        <>
            <AppBar position="sticky">
                <Container>
                    <Toolbar disableGutters>
                        <Link href="/" variant="h4" color="inherit" underline="hover" display="flex" justifyContent="center" alignItems="center">
                            <img alt="" src="/logo-transparent.png" width="64px" height="64x" />
                            Incrie Technologies
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Link href="/products">
                                <Button variant="text" style={{ color: theme.palette.text.main }}>
                                    Products
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}