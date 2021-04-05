const withPWA = require('next-pwa');

module.exports = withPWA({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['www.notion.so'],
  },
  pwa: {
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public',
    sw: 'service-worker.js',
  },
});
