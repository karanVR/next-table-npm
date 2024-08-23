import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  //@ts-ignore
  plugins: [react()],

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // react: path.resolve('./node_modules/react'),
      // 'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
})
