import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taskflow.app',
  appName: 'Task Flow',
  webDir: '.next',
  server: {
    androidScheme: 'http',
    url: 'http://192.168.56.1:3000', //todo update when production, update android/app/src/main/AndroidManifest.xml, line 4
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;