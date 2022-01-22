import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {
    Box
} from '@mui/material';
import theme from '../styles/theme';

export default function DefaultLayout({
    children
}) {
    return (
        <>
            <Head>
                <title>Incrie Technologies</title>
                <link rel="icon" type="image/x-icon" href="/logo-transparent-coloured.png" />

                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#990000" />
                <meta http-equiv="content-language" content="en" />
                <meta name="copyright" content="Incrie Technologies, 2022" />
                <meta name="keywords" content="Incrie, Minecraft, Software, Tech, Open-Source" />
                <meta name="robots" content="index, follow" />

                <meta name="description" content="An official webpage for Incrie Technologies." />
                <meta name="author" content="Incrie Technologies" />

                <meta property="og:title" content="Incrie Technologies" />
                <meta property="og:description" content="An official webpage for Incrie Technologies." />
            </Head>
            <Box display="flex" flexDirection="column" minHeight="100vh" style={{ backgroundColor: theme.palette.background.main }}>
                <NavBar />
                <main style={{ paddingBottom: theme.spacing(4) }}>{children}</main>
                <Footer />
            </Box>
        </>
    );
}