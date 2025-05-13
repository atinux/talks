import { defineConfig } from 'unocss/vite'
import { presetWebFonts } from 'unocss'
import config from '@slidev/client/uno.config'

export default defineConfig({
  ...config,
  shortcuts: {
    ...config.shortcuts || {},
    'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
  },
  presets: [
    presetWebFonts({
      fonts: {
        number: 'Oswald',
      },
    }),
  ],
})
