const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const { i18n } = require("./next-i18next.config");

module.exports = withPWA({
  i18n,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
  },
  loader: "cloudinary",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/clothing",
        permanent: false,
      },
    ];
  },
  images: {
    domains: [
      "googleusercontent.com",
      "graph.facebook.com",
      "s3.amazonaws.com",
      "18.141.64.26",
      "via.placeholder.com",
      "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "picsum.photos",
      "lh3.googleusercontent.com",
      "192.168.0.137",
      // "35.222.165.109:8006",
      "192.168.1.39",
      "localhost",
      "res.cloudinary.com",
      // "navin.imitpark.co.in"
      "navin.gitdr.com/api/public/"
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
