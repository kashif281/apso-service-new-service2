"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const devPGOptions = {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
};
const prodPGOptions = { url: process.env.DATABASE_URL };
let options = {
    type: 'postgres',
    database: process.env.DATABASE_NAME || 'test',
    entities: ['src/**/**/*.entity.{ts,js}'],
    migrations: ['src/migrations/*{.ts,.js}'],
    seeds: ['src/seeders/*.seeder{.ts,.js}'],
    schema: process.env.DATABASE_SCHEMA,
};
if (process.env.NODE_ENV !== 'production') {
    options = Object.assign(Object.assign({}, options), devPGOptions);
}
else {
    options = Object.assign(Object.assign({}, options), prodPGOptions);
}
const dataSource = new typeorm_1.DataSource(options);
exports.default = dataSource;
//# sourceMappingURL=typeorm-data-source.js.map