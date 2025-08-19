// Environment variables type definitions
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
      MONGO_URI: string;
      JWT_SECRET: string;
      JWT_EXPIRES_IN?: string;
      CLIENT_URL?: string;
      [key: string]: string | undefined;
    }
  }
}

export {};