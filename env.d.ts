declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    DATABASE_URL: string;
    STRIPE_SECRET_KEY: string;
    NEXT_PUBLIC_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET_KEY: string;
    HOST_URL: string;
  }
}
