import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 개발 환경에서는 '/' 사용, 프로덕션에서는 './' 사용 (GitHub Pages)
  base: command === 'serve' ? '/' : './',
}))





