import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animation: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500
  },
  // Optimize dev experience
  server: {
    port: 3000
  }
})