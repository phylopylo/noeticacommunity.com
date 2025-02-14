import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      '3am.tail20e7c5.ts.net',
      'wag.pw',
      'noeticacommunity.com',
      // Any other hosts you want to allow
    ],
    watch: {
      usePolling: true
    },
  },
  plugins: [react()],
})
