import { fileURLToPath, URL } from 'node:url'
<<<<<<< HEAD
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  resolve: {
    extensions: ['.mjs', '.ts', '.js', '.vue', '.jsx', '.tsx', '.json'],
=======

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
>>>>>>> 2920fb3a9ab92cb7bb71bfc5dd31bc93e4c2befc
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
