// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /** 🔽 Force Next.js to transpile Ant Design & its peer deps */
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    'rc-util',
    'rc-picker',
    'rc-trigger',
  ],

  // Disable ESLint during builds to allow type-unsafe utility components
  eslint: {
    ignoreDuringBuilds: true,
  },

  // …any other Next.js options
}

export default nextConfig
