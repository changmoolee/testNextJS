/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*", // 유저가 여기로 이동하면
        destination: "/new-blog/:path*", // 여기로 Redirect 시켜줄 것이다
        permanent: false,
      },
      {
        source: "/old-phone/:path*", // 유저가 여기로 이동하면
        destination: "/new-phone/:path*", // 여기로 Redirect 시켜줄 것이다
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
