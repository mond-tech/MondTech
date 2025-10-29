import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lingoCompiler from 'lingo.dev/compiler';

// 1️⃣ Define your base Vite config
const existingViteConfig = defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});

// 2️⃣ Wrap it with the Lingo compiler configuration
export default lingoCompiler.vite({
  sourceLocale: 'en',
  targetLocales: ['es', 'fr'],
  useLLM: false
})(existingViteConfig);
