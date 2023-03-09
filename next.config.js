const dotenv = require('dotenv')
dotenv.config()

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode

  images: {
    domains: [
      'i.ibb.co',
    ],
  },

};

module.exports = nextConfig;
