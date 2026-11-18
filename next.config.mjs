import { fileURLToPath } from "node:url";
/** @type {import('next').NextConfig} */
// Igual ao site da iAgroSat: site estático (pasta out/), pronto para a Vercel.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // D5 (15/11/2026): sem os polyfills do Next para navegadores antigos. O público usa Chrome ou Edge recentes e
  // celular atual; o mínimo fica no browserslist do package.json (Chrome/Edge 93, Firefox 92, Safari/iOS 15.4).
  webpack: (config, { webpack, isServer }) => {
    if (!isServer) {
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(
        /[\\/]build[\\/]polyfills[\\/]polyfill-module(\.js)?$/,
        fileURLToPath(new URL("./lib/polyfill-vazio.js", import.meta.url)),
      ));
    }
    return config;
  },
};
export default nextConfig;
