import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taskflow.app',
  appName: 'Task Flow',
  webDir: '.next',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.56.1:3000',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
