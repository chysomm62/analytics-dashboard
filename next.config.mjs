/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: "@svgr/webpack", options: { icon: true } },
        { loader: "url-loader" },
      ],
    });

    return config;
  },
};

export default nextConfig;
