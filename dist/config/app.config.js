"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.app = void 0;
const env_config_1 = require("./env.config");
exports.app = {
    defaultAction: 'handle',
    name: env_config_1.config.APP_NAME,
    port: env_config_1.config.APP_PORT,
    site: env_config_1.config.APP_SITE,
    allowedOrigins: env_config_1.config.ALLOWED_ORIGINS,
    env: env_config_1.config.ENV,
};
exports.log = {
    colorize: true,
    level: env_config_1.config.LOG_LEVEL,
    timestamps: 'quiet',
};
//# sourceMappingURL=app.config.js.map