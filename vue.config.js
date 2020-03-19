module.exports = {
  css: {
    loaderOptions: {
      // css: {
      //   // Note: the following config format is different between Vue CLI v4 and v3
      //   // For Vue CLI v3 users, please refer to css-loader v1 documentations
      //   // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
      //   requireModuleExtension: true,
      //   modules: {
      //     localIdentName: '[name]-[hash]',
      //   },
      //   localsConvention: 'camelCaseOnly',
      // },
      scss: {
        prependData: `@import "~@/assets/scss/main.scss";`,
      },
    },
  },
}
