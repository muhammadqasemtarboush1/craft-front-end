/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["*", "res.cloudinary.com"],

    unoptimized: true, deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], minimumCacheTTL: 60,

  },

}
module.exports = nextConfig
