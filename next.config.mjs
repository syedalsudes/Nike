/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["template-03-api.vercel.app"],
    },
    swcMinify: false, 
};

export default nextConfig;
