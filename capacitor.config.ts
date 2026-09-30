import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.commutai.unified',
  appName: 'CommutAI Unified',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    // Allow navigation between different app routes
    allowNavigation: ['*']
  },
  // Enable deep linking for role-based routes
  plugins: {
    App: {
      // Handle app URL schemes for deep linking
      urlSchemes: ['commutai']
    }
  }
};

export default config;
