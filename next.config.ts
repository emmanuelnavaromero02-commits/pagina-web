import type { NextConfig } from "next";

const locale = process.env.NEXT_PUBLIC_SITE_LOCALE === "en" ? "en" : "es";
const basePath = locale === "en" ? "/en" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: `tsconfig.${locale}.json`,
  },
};

export default nextConfig;
