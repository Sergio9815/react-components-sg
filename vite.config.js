import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js', // Reemplaza con tu archivo de entrada principal
      name: 'react-components-sg', // Reemplaza con el nombre de tu biblioteca
    },
    rollupOptions: {
      // Otras opciones de Rollup, si es necesario
    },
  },
  plugins: [react()],
})
