/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    i18n: {
        locales: ["pl"],
        defaultLocale: "pl",
    },
    env: {
        SERVICE_ID: process.env.SERVICE_ID,
        TEMPLATE_ID: process.env.TEMPLATE_ID,
        PUBLIC_KEY: process.env.PUBLIC_KEY,
    },
};

module.exports = nextConfig;
