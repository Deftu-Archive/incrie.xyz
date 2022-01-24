import Head from 'next/head';
import {
    Container,
    Grid,
    Typography,
    Link
} from '@mui/material';
import DefaultLayout from '../layouts/DefaultLayout';
import theme from '../styles/theme';

export default function Home() {
    return (
        <>
            <Head>
                <title>Incrie Technologies</title>

                <meta name="description" content="Home page for the Incrie Technologies website." />
                <meta property="og:description" content="Home page for the Incrie Technologies website." />
            </Head>
            <DefaultLayout>
                <Container>
                    <Grid
                        container
                        justifyContent="center">
                        <Grid item xs={12} container justifyContent="center">
                            <Typography variant="h2" align="center" color={theme.palette.text.main}>
                                Hello! We have no content to put here right now.
                                <br />
                                In the mean time, you can visit our&nbsp;
                                <Link href="/products" underline="hover" style={{ color: theme.palette.primary.main }}>
                                    Products page.
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </DefaultLayout>
        </>
    );
}