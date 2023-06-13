module.exports = {
  assetsDir: "static-vue",
  devServer: {
    proxy: {
      "/api.php": {
        target: "http://darkhorsepay.mym35.com/",
      },
    },
  },
};
