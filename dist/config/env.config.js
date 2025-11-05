"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const env = require("dotenv");
const defaultConfig = {
    APP_PORT: 3200,
    APP_SITE: 'http://localhost',
    APP_NAME: 'Apso Template',
    ALLOWED_ORIGINS: 'locahost',
    COOKIE_HTTP_ONLY: true,
    COOKIE_PATH: '/auth/refresh_token',
    COOKIE_DOMAIN: 'http://localhost:3001',
    COOKIE_SAME_SITE: false,
    COOKIE_SECURE: false,
    LOG_LEVEL: 'debug',
    SESSION_KEY: 'aid',
    SESSION_SECRET: 'wine is fine, whiskey is swell, but beer is better',
    ACCESS_SECRET_TOKEN: 'spidey sense is dense',
    REFRESH_SECRET_TOKEN: 'but ironman is not ironic',
    DATABASE_TYPE: 'postgres',
    DATABASE_HOST: 'localhost',
    DATABASE_PORT: 54322,
    DATABASE_USERNAME: 'apso',
    DATABASE_PASSWORD: 'password',
    DATABASE_NAME: 'apso',
    DATABASE_SCHEMA: 'apso_test',
    DATABASE_SYNC: 'false',
    DATABASE_LOGGING: 'all',
    ENV: 'local',
    STRIPE_CHECKOUT_CANCEL_URL: '',
    STRIPE_CHECKOUT_SUCCESS_URL: '',
};
exports.config = Object.assign(Object.assign(Object.assign({}, defaultConfig), process.env), env.config().parsed);
//# sourceMappingURL=env.config.js.map