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
  // Alternative: use 'export' for static deployment
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig 