/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com", "oaidalleapiprodscus.blob.core.windows.net"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
