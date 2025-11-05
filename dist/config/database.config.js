"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const env_config_1 = require("./env.config");
exports.database = {
    type: env_config_1.config.DATABASE_TYPE,
    host: env_config_1.config.DATABASE_HOST,
    port: env_config_1.config.DATABASE_PORT,
    username: env_config_1.config.DATABASE_USERNAME,
    password: env_config_1.config.DATABASE_PASSWORD,
    database: env_config_1.config.DATABASE_NAME,
    schema: env_config_1.config.DATABASE_SCHEMA,
    synchronize: /^true$/i.test(env_config_1.config.DATABASE_SYNC),
    logging: env_config_1.config.DATABASE_LOGGING,
};
//# sourceMappingURL=database.config.js.map