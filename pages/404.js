import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import theme from '../styles/theme';

export default function Products() {
    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ minHeight: "100vh", backgroundColor: theme.palette.background.main, textAlign: "center" }}>
                <Typography variant="h3" color="white">
                    404
                    <br />
                    Page Not Found
                </Typography>
            </Box>
            <Head>
                <title>Incrie Technologies - 404</title>
                <link rel="icon" type="image/x-icon" href="/logo-transparent-coloured.png" />

                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#990000" />
                <meta httpEquiv="content-language" content="en" />
                <meta name="copyright" content="Incrie Technologies, 2022" />
                <meta name="robots" content="noindex, nofollow" />

                <meta name="description" content="The content for this URL could not be found." />
                <meta name="author" content="Incrie Technologies" />

                <meta property="og:title" content="Incrie Technologies" />
                <meta property="og:description" content="The content for this URL could not be found." />
            </Head>
        </>
    );
}