/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    // Required for static hosting (next export / GitHub Pages):
    // serve images directly from /public instead of the Image Optimization API.
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
