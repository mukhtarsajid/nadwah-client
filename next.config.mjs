const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.drz.lazcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.lattafa-usa.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;