import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["emailjs-com"],
    },
  },
  plugins: [react()],
})
