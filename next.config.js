const runtimeCaching = require('next-pwa/cache');

// const urlPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ? '/' + process.env.NEXT_PUBLIC_ASSET_PREFIX : '';

const withPWA = require('next-pwa')({
  scope: '/~trashart',
  dest: 'public',
  sw: '/~trashart/sw.js',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: false,
  images: {
    domains: ['ezaki-lab.cloud']
  },
  // assetPrefix: urlPrefix,
  // publicRuntimeConfig: { urlPrefix }
});

module.exports = nextConfig;
