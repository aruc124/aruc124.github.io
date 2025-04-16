/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // ✅ enables static export
  trailingSlash: true,         // ✅ needed for folder-based URLs
  basePath: '/aruc124.github.io',       // ✅ correct for your repo
  assetPrefix: '/aruc124.github.io/',   // ✅ needed for scripts/styles/images
  images: {
    unoptimized: true          // ✅ disables dynamic image optimization
  }
};

export default nextConfig;
