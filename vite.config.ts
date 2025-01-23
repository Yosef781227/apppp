import { defineConfig } from "vite";

export default defineConfig({
   base: "/",
   build: {
      outDir: 'dist',
   },
   resolve: {
      alias: {
         '@': resolve(__dirname, './src'),
      },
   },
});
