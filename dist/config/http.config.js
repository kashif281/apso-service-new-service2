"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.session = exports.cookie = void 0;
const env_config_1 = require("./env.config");
exports.cookie = {
    httpOnly: env_config_1.config.COOKIE_HTTP_ONLY,
    path: env_config_1.config.COOKIE_PATH,
    domain: env_config_1.config.COOKIE_DOMAIN,
    sameSite: env_config_1.config.COOKIE_SAME_SITE,
    secure: Boolean(env_config_1.config.COOKIE_SECURE),
};
exports.session = {
    key: env_config_1.config.SESSION_KEY,
    secret: env_config_1.config.SESSION_SECRET,
    ttl: 60 * 60 * 24,
};
//# sourceMappingURL=http.config.js.map