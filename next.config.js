// const urlPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ? '/' + process.env.NEXT_PUBLIC_ASSET_PREFIX : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['ezaki-lab.cloud']
  },
  // assetPrefix: urlPrefix,
  // publicRuntimeConfig: { urlPrefix }
};

module.exports = nextConfig;
