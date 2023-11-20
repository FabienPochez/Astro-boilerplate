import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from "@astrojs/tailwind"
import basicSsl from '@vitejs/plugin-basic-ssl'
const env = loadEnv("", process.cwd(), 'STORYBLOK')

 
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: "uanS49SuxPXTKskiHWFyQgtt",
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
      apiOptions: {
        region: "eu",
      },
    }),
    tailwind()
  ],
  vite: {
    plugins: [
      basicSsl()
    ],
    server: {
      https: true,
    },
   
  },
})