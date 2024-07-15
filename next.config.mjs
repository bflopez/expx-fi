/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "exponential.imgix.net",
            }
        ]
    }
};

export default nextConfig;
