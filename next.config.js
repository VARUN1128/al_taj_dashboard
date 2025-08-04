/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  // For Cloudflare Pages deployment
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig 