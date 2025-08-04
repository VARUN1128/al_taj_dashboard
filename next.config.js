/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  // For Cloudflare Pages deployment with @cloudflare/next-on-pages
  output: 'standalone',
}

module.exports = nextConfig 