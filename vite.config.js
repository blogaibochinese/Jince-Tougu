import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // 确保静态文件目录被正确处理
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        forex: 'forex.html',
        crypto: 'crypto.html',
        commodities: 'commondities.html',
        'stock-index': 'stock-index.html',
        transfer: 'transfer.html',
        'risk-control': 'risk-control.html',
        reports: 'reports.html',
        strategy: 'strategy.html',
        'sure-win': 'sure-win.html',
        newest: 'newest.html',
        subscribe: 'subscribe.html',
        'copy-trading': 'copy-trading.html',
        followme: 'followme.html',
        // 添加binance目录下的文件
        'binance-follow-btc': 'binance/follow-btc.html',
        // 添加kvb目录下的文件
        'kvb-account-advtg': 'kvb/account advtg.html',
        // 添加post目录下的文件
        'post-sure-win': 'post/sure-win.html',
        'post-strategy': 'post/strategy.html',
        'post-self-recharge': 'post/self recharge.html',
        'post-safepalx1': 'post/safepalx1.html',
        'post-SafePal': 'post/SafePal.html',
        'post-roogoo': 'post/roogoo.html',
        'post-risk-control': 'post/risk-control.html',
        'post-reports': 'post/reports.html',
        'post-Proxy-Recharge': 'post/Proxy Recharge.html',
        'post-pinkwallet': 'post/pinkwallet.html',
        'post-pay': 'post/pay.html',
        'post-followme': 'post/followme.html',
        'post-follow-btc': 'post/follow-btc.html',
        'post-eurusd251124': 'post/eurusd251124.html',
        'post-apply-V-cards': 'post/apply V-cards.html'
      }
    },
    // 确保这些目录被包含在构建中
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        '微信图片_20251212072309_96_19.jpg',
        'binance/**',
        'kvb/**',
        'post/**'
      ],
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
        // 禁用 navigateFallback，避免重定向问题
        navigateFallback: null,
        // 确保这些路径不被重定向
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
          // 确保这些目录下的所有文件都不被重定向
          /^\/binance\/.*$/,
          /^\/kvb\/.*$/,
          /^\/post\/.*$/
        ],
        // 确保这些目录下的文件被正确缓存
        globPatterns: [
          '**/*.html',
          '**/*.css',
          '**/*.js',
          '**/*.jpg',
          'binance/**',
          'kvb/**',
          'post/**'
        ]
      }
    })
  ]
});