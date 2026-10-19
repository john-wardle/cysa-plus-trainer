import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'CySA+ Training Tool',
        short_name: 'CySA+ Trainer',
        description: 'Practice questions and PBQs for CompTIA CySA+ preparation.',
        theme_color: '#0f172a',
        background_color: '#020617',
        display: 'standalone',
      },
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8787',
    },
  },
})
