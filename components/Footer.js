import {
    Container,
    Typography
} from "@mui/material";
import theme from "../styles/theme";

export default function Footer() {
    return (
        <>
            <footer style={{ marginTop: "auto", backgroundColor: theme.palette.primary.main }}>
                <Container style={{ display: "flex", justifyContent: "center" }}> 
                    <Typography variant="h6" color="white">
                        © 2022 Incrie Technologies
                    </Typography>
                </Container>
            </footer>
        </>
    );
}