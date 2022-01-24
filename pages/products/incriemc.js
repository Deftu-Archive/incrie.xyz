import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import DefaultLayout from '../../layouts/DefaultLayout';

export default function IncrieMC() {
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
                <title>Incrie Technologies - IncrieMC</title>

                <meta name="description" content="IncrieMC is a complex API built for Minecraft modding." />
                <meta property="og:description" content="IncrieMC is a complex API built for Minecraft modding." />
            </Head>
        </>
    );
}