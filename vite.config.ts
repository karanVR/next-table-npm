import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
// import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
// const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    // linterPlugin({
    //   include: ['./src}/**/*.{ts,tsx}'],
    //   linters: [new EsLinter({ configEnv })],
    // }),
    dts({
      include: ['src/'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'ReactViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `next-table.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom','react/jsx-runtime',...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          clsx: 'clsx',
          'class-variance-authority': 'classVarianceAuthority',
          '@radix-ui/react-slot': 'reactSlot',
          'tailwind-merge': 'tailwindMerge',
          '@radix-ui/react-icons': 'reactIcons',
          '@tanstack/react-table': 'reactTable',
          'date-fns': 'dateFns',
          'react-day-picker': 'reactDayPicker',
        },
      },
    },
  },
}))
