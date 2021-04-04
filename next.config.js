const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    domains: ['www.notion.so'],
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
});
