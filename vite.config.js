import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Angie_Nails_Studio/', // Usa el nombre exacto de tu repo de GitHub
})
