// const urlPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ? '/' + process.env.NEXT_PUBLIC_ASSET_PREFIX : '';

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  // ...
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: false,
  images: {
    domains: ['ezaki-lab.cloud']
  },
  // assetPrefix: urlPrefix,
  // publicRuntimeConfig: { urlPrefix }
});
