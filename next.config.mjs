import bundleAnalyzer from '@next/bundle-analyzer';

const withAccessibility = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    })
    
    // Add optimization for Three.js
    config.module.rules.push({
      test: /three\/examples\/js/,
      use: 'imports-loader?THREE=three',
    })
    
    return config
  },
}

export default nextConfig;
