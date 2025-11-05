"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmAsyncConfig = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const config_2 = require("./config");
const sslConfig = process.env.DB_SSL
    ? {
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
    }
    : {};
const ormConfig = Object.assign({ type: config_2.default.database.type, host: config_2.default.database.host, port: parseInt(config_2.default.database.port, 10), username: config_2.default.database.username, database: config_2.default.database.database, password: config_2.default.database.password, schema: config_2.default.database.schema, entities: [(0, path_1.join)(__dirname, '**', '*.entity.js')], migrations: [(0, path_1.join)(__dirname, '**', 'migrations/*-migration.js')], synchronize: config_2.default.database.synchronize, logging: config_2.default.database.logging }, sslConfig);
exports.typeOrmAsyncConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async () => {
        console.log('ORM CONFIG', ormConfig);
        return ormConfig;
    },
};
exports.default = new typeorm_1.DataSource(ormConfig);
//# sourceMappingURL=orm.config.js.map