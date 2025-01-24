import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Web-Personal/', // Asegúrate de que coincide con el nombre exacto de tu repositorio
});
