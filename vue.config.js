const { defineConfig } = require('@vue/cli-service')
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
module.exports = {
  pwa: {
    name: 'Escape Room',
    short_name: 'חדר בריחה',
    themeColor: 'white',
    msTileColor: '#000000',
    manifestOptions: {
      start_url: '.',
      display: 'fullscreen',
      background_color: '#FFFFFF',
    },
  },
};
