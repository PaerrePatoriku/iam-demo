import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vite.dev/config/


const envDir = "env"
dotenv.config({ path : `${envDir}/.env` })

export default defineConfig({
  plugins: [react()],
  server : {
    proxy : {
      "/api": {
        target : process.env.VITE_BACKEND_URL
      }
    }
  }
})
