import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/sobre-mi",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/proyectos",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/agendar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
