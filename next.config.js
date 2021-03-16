const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    domains: ['www.notion.so'],
  },
  pwa: {
    dest: 'public',
  },
});
