/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // za statički build
  images: {
    unoptimized: true, // važno za lokalne slike u public folderu
  },
};

module.exports = nextConfig;
