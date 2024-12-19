import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdown({
      mode: ['html', 'toc'],
      markdownIt: {
        html: true,
      },
      exportType: 'default'
    })
  ],
})
