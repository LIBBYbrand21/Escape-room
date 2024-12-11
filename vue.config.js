const { defineConfig } = require('@vue/cli-service')
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
module.exports = {
  /* publicPath: './',*/
  pwa: {
    name: 'Escape Room',
    short_name: 'חדר בריחה',
    themeColor: 'white',
    msTileColor: '#000000',
    manifestOptions: {
      start_url: '.',
      display: 'fullscreen',
      background_color: '#FFFFFF'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://us-central1-escape-room-c7fc1.cloudfunctions.net',
        changeOrigin: true,
      },
    },
  },
}
