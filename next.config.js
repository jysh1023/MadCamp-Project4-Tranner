/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['date-fns']);

const nextConfig = {
  reactStrictMode: true,
  env: {
    NAVER_MAP_CLIENT_ID: 'oe1nc3j5z5',
    NAVER_API_CLIENT_ID: 'FaJ_YB8ZZJCnUfK_WCDH',
    NAVER_API_KEY_SECRET: 'mbR8UKw1UP',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
}

module.exports = withTM();