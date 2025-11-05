"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_rest_1 = require("./app.module.rest");
const nest_app_config_1 = require("./config/nest-app.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_rest_1.AppModule);
    await (0, nest_app_config_1.configureNestApp)(app);
    await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map