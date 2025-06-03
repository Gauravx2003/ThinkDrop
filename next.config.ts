import type { NextConfig } from "next";
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    dangerouslyAllowSVG:true,
    remotePatterns:[
      {
        protocol:'https',
        hostname:'*',
      }
    ]
  },

  experimental:{
    ppr: 'incremental',
  },

 

};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, {
  org: "gaurav-0a",
  project: "javascript-nextjs",
  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Pass the auth token
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  automaticVercelMonitors: true,

  reactComponentAnnotation: {
    enabled: true,
  },

});

export default nextConfig;
