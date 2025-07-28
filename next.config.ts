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

  // …any other Next.js options
}

export default nextConfig