/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["pl"],
        defaultLocale: "pl",
    },
};

module.exports = nextConfig;
