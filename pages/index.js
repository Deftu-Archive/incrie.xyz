import { Container, Typography } from '@mui/material';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Container display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ textAlign: "center" }}>
                        <Typography variant="h1" color="white">
                            This website is still under construction, please come back later.
                        </Typography>
                </Container>
            </DefaultLayout>
        </>
    );
}