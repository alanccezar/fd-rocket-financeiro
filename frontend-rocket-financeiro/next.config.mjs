import nextRoutes from "nextjs-routes/config";
const withRoutes = nextRoutes();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withRoutes(nextConfig);
