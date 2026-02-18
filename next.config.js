/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize fonts
  optimizeFonts: true,
  // Compression
  compress: true,
  // Experimental features for better mobile performance
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
