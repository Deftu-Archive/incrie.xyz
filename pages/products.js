import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Products() {
    return (
        <>
            <Head>
                <title>Incrie Technologies - Products</title>

                <meta name="description" content="Incrie Technologies' product list." />
                <meta property="og:description" content="Incrie Technologies' product list." />
            </Head>
            <DefaultLayout>
                <Container display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ textAlign: "center" }}>
                        <Typography variant="h3" color="white">
                            This website is still under construction, please come back later.
                        </Typography>
                </Container>
            </DefaultLayout>
        </>
    );
}