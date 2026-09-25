/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages serves static files only
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
