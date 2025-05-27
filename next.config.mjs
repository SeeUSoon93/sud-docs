import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV !== "production", // ✅ 안정적!
  runtimeCaching: undefined // ✅ 빈 배열 말고 undefined 권장
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default pwaConfig(nextConfig);
