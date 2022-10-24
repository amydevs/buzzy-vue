const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    experiments: {
      syncWebAssembly: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer")
      }
    }
  },
  pwa: {
    name: "Buzzy",
    workboxPluginMode: 'GenerateSW',
    maximumFileSizeToCacheInBytes: 5000000,
  }
})
