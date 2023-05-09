import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://opticalraze.com/carry-on-packing-travel-agency/',
  plugins: [vue()],
})
