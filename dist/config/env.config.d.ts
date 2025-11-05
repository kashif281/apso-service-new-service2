export interface EnvConfigOptions {
    APP_PORT: number;
    APP_SITE: string;
    APP_NAME: string;
    ALLOWED_ORIGINS: string;
    COOKIE_HTTP_ONLY: boolean;
    COOKIE_PATH: string;
    COOKIE_DOMAIN: string;
    COOKIE_SAME_SITE: boolean | 'lax' | 'strict' | 'none';
    COOKIE_SECURE: boolean;
    LOG_LEVEL: string;
    SESSION_KEY: string;
    SESSION_SECRET: string;
    ACCESS_SECRET_TOKEN: string;
    REFRESH_SECRET_TOKEN: string;
    DATABASE_TYPE: 'postgres' | 'mysql';
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    DATABASE_SCHEMA: string;
    DATABASE_SYNC: string;
    DATABASE_LOGGING: boolean | 'all' | ('query' | 'schema' | 'error' | 'warn' | 'info' | 'log' | 'migration')[];
    ENV: 'local' | 'dev' | 'staging' | 'production';
    STRIPE_CHECKOUT_CANCEL_URL: string;
    STRIPE_CHECKOUT_SUCCESS_URL: string;
}
export declare const config: EnvConfigOptions;
