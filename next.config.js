/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: true,
  },
  // For Cloudflare Pages deployment - static export
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig 