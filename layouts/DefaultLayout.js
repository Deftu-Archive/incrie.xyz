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
                <link rel="icon" type="image/x-icon" href="/logo-transparent-coloured.png"></link>
            </Head>
            <Box display="flex" flexDirection="column" minHeight="100vh" style={{ backgroundColor: theme.palette.background.main }}>
                <NavBar />
                <main style={{ paddingBottom: theme.spacing(4) }}>{children}</main>
                <Footer />
            </Box>
        </>
    );
}