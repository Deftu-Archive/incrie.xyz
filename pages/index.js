import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Container display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ textAlign: "center" }}>
                        <Typography variant="h3" color="white">
                            This website is still under construction, please come back later.
                        </Typography>
                </Container>
            </DefaultLayout>
            <Head>
                <meta name="description" content="Home page for the Incrie Technologies website." />
                <meta property="og:description" content="Home page for the Incrie Technologies website." />
            </Head>
        </>
    );
}