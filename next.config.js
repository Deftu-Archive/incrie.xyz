module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/discord",
                destination: "https://discord.gg/k7Gj5DYSyg",
                permanent: true
            },
            {
                source: "/github/:slug*",
                destination: "https://github.com/IncrieTechnologies/:slug*",
                permanent: true
            }
        ]
    }
}
