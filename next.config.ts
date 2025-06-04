const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: "gaurav-0a",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  disableLogger: true,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  automaticVercelMonitors: true,
  reactComponentAnnotation: {
    enabled: true,
  },
});
