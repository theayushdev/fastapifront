import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/fastapifront/',
  plugins: [react()],
  define: {
    __API__: JSON.stringify(process.env.VITE_API_URL)
  }
  
})


