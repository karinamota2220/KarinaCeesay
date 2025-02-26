import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // Remove emailjs-com from external if you want it to be bundled
      external: [],
    },
  },
  plugins: [react()],
})
