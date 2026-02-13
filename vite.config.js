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
      }
    })
  ]
});