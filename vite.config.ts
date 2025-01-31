import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'homeworks': path.resolve(__dirname, 'src/homeworks'),
      'lessons': path.resolve(__dirname, 'src/lessons'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'consultations': path.resolve(__dirname, 'src/consultations'),
      'styles': path.resolve(__dirname, 'src/styles')
    }
  },
})
