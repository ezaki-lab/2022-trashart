/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: '/',
  async rewrites() {
    return [
      {
        source: '/:url',
        destination: '/~trashart/:url',
      },
    ];
  },
};

module.exports = nextConfig;
