import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['微信图片_20251212072309_96_19.jpg'],
      manifest: {
        name: 'Jince Tougu',
        short_name: 'Jince',
        description: 'Jince Tougu Investment Platform',
        theme_color: '#ffffff',
        icons: [
          {
            src: '微信图片_20251212072309_96_19.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: '微信图片_20251212072309_96_19.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      },
      workbox: {
        navigateFallback: null,
        navigateFallbackDenylist: [
          /^\/forex$/,
          /^\/forex\.html$/,
          /^\/stock-index$/,
          /^\/stock-index\.html$/,
          /^\/commondities$/,
          /^\/commondities\.html$/,
          /^\/crypto$/,
          /^\/crypto\.html$/,
          /^\/transfer$/,
          /^\/transfer\.html$/,
          /^\/risk-control$/,
          /^\/risk-control\.html$/,
          /^\/reports$/,
          /^\/reports\.html$/,
          /^\/strategy$/,
          /^\/strategy\.html$/,
          /^\/sure-win$/,
          /^\/sure-win\.html$/,
          /^\/newest$/,
          /^\/newest\.html$/,
          /^\/subscribe$/,
          /^\/subscribe\.html$/,
          /^\/copy-trading$/,
          /^\/copy-trading\.html$/,
          /^\/followme$/,
          /^\/followme\.html$/,
          /^\/binance\//,
          /^\/kvb\//,
          /^\/post\//
        ]
      }
    })
  ]
});