import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  build: {
    // Build output goes into Spring Boot's static/ so `mvn package` ships one jar
    outDir: '../src/main/resources/static',
    emptyOutDir: true
  }
});
