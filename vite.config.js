import { defineConfig } from 'vite';

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
  }
});