declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      JWT_KEY: string;
    }
  }
}

export {};
