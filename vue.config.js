const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
        'utils': require('path').resolve(__dirname, 'src', 'utils'),
        'views': require('path').resolve(__dirname, 'src', 'views'),
        'components': require('path').resolve(__dirname, 'src', 'components'),
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args=>{
      args[0].title = "一直闲云呀";
      return args
    })
  }
});
