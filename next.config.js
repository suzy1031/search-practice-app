/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  async redirects() {
    return [
      {
        source: '/layout/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/components/:slug',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['thumbnail.image.rakuten.co.jp'],
  },
}

module.exports = nextConfig
