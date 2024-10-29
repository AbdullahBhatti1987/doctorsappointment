/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "lh4.googleusercontent.com"
            },
            {
                hostname: "img.freepik.com"
            }           
        
        ]
    }
};

export default nextConfig;
