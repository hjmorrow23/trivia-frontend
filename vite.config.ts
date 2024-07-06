/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv('', process.cwd())
  return {
    plugins: [vue()],
    test: {},
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})
