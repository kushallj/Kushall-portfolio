import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {resolve, dirname} from "path";
import { fileURLToPath } from 'url';
import process from 'node:process';


// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS && !process.env.CUSTOM_DOMAIN ? '/Kushall-portfolio/' : '/'),
  plugins: [react(),
    tailwindcss(),
  ],
  resolve : {
    alias : {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),

    }
  }
})
