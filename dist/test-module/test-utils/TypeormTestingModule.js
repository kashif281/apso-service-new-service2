"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMMySqlTestingModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const TypeORMMySqlTestingModule = (entities) => typeorm_1.TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'apso',
    entities: [...entities],
    schema: process.env.DATABASE_SCHEMA || 'apso',
});
exports.TypeORMMySqlTestingModule = TypeORMMySqlTestingModule;
//# sourceMappingURL=TypeormTestingModule.js.map