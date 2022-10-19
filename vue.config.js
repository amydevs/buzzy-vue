const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
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
    workboxOptions: {
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('.*wasm'),
          handler: 'NetworkFirst',
        }
      ]
    }
  }
})
