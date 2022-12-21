/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  // change to true when https://github.com/cookpete/react-player/issues/1542 merged
  reactStrictMode: false,
};

module.exports = nextConfig;
