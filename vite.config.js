import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Web-Personal/', // Reemplaza "tu-repositorio" con el nombre de tu repositorio
  plugins: [react()],
})
