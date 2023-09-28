/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_API_KEY: process.env.NEXT_PUBLIC_SERVER_API_KEY,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
