import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'https://jsonplaceholder.typicode.com',
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/shared': resolve(__dirname, './src/shared'),
      '@/entities': resolve(__dirname, './src/entities'),
      '@/features': resolve(__dirname, './src/features'),
      '@/pages': resolve(__dirname, './src/pages'),
      '@/components': resolve(__dirname, './src/components'),
    },
  },
})
