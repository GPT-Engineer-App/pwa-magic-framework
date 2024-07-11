import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@supabase/supabase-js',
        '@/components/ui/sonner',
        '@/components/ui/tooltip',
        '@/components/theme-provider',
        '@/components/OfflineNotification'
      ],
    },
  },
});