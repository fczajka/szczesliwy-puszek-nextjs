/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVICE_ID: "gmail",
        TEMPLATE_ID: "template_7y5yjvg",
        PUBLIC_KEY: "d-iXMGfxsUvFFZHe0",
    },
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["pl"],
        defaultLocale: "pl",
    },
};

module.exports = nextConfig;
