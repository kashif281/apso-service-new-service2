"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const env_config_1 = require("./env.config");
exports.token = {
    accessTokenSecret: env_config_1.config.ACCESS_SECRET_TOKEN,
    refreshTokenSecret: env_config_1.config.REFRESH_SECRET_TOKEN,
};
//# sourceMappingURL=api.config.js.map