"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const config_1 = require("./config");
(async () => {
    console.log('Database config: \n');
    const db = {
        type: config_1.default.database.type,
        host: config_1.default.database.host,
        port: parseInt(config_1.default.database.port, 10),
        username: config_1.default.database.username,
        database: config_1.default.database.database,
        password: config_1.default.database.password,
        schema: config_1.default.database.schema,
        synchronize: config_1.default.database.synchronize,
        logging: config_1.default.database.logging,
        entities: [(0, path_1.join)(__dirname, '**', '*.entity.ts')],
    };
    console.log(db);
    const PostgresDataSource = new typeorm_1.DataSource(db);
    try {
        await PostgresDataSource.initialize();
        console.log('Data Source has been initialized!');
        await PostgresDataSource.synchronize();
        console.log('Data Source has been synchronized!');
    }
    catch (err) {
        console.error('Error during Data Source synchronization');
        console.error(err);
    }
})();
//# sourceMappingURL=sync.js.map