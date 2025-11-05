"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureNestApp = configureNestApp;
const swagger_1 = require("@nestjs/swagger");
const db_exception_filter_1 = require("../utils/errors/db-exception.filter");
const fs = require("fs");
const path = require("path");
async function configureNestApp(app) {
    app.useGlobalFilters(new db_exception_filter_1.TypeORMErrorFilter());
    let serviceName = '{Apso Service}';
    try {
        const apsoConfig = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), '.apsorc'), 'utf8'));
        serviceName = apsoConfig.serviceName || serviceName;
    }
    catch (error) {
        console.warn('Could not read serviceName from .apsorc, using default value');
    }
    const options = new swagger_1.DocumentBuilder()
        .setTitle(serviceName)
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('_docs', app, document);
}
//# sourceMappingURL=nest-app.config.js.map