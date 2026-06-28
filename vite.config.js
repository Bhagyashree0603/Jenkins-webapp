// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // Change "5000" to match your local backend server port
        target: 'http://localhost:8080', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
