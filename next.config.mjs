/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mapApiKey: process.env.MAP_TILER_API_KEY,
  },
};

export default nextConfig;
