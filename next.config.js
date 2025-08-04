/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  // For Cloudflare Pages deployment
  output: 'standalone',
  // Ensure proper static generation
  trailingSlash: true,
}

module.exports = nextConfig 