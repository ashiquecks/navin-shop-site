const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const { i18n } = require("./next-i18next.config");

module.exports = withPWA({

  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // },

  i18n,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
  },

  images: {
    domains: [
      "via.placeholder.com",
      "res.cloudinary.com",
      "s3.amazonaws.com",
      "18.141.64.26",
      "127.0.0.1",
      "navin.imithosting.com",
      "localhost",
      "picsum.photos",
      "pickBazar-sail.test",
      "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "lh3.googleusercontent.com",
      "127.0.0.1",
      "192.168.1.39"
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },

});
