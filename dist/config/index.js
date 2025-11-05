"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_config_1 = require("./api.config");
const app_config_1 = require("./app.config");
const database_config_1 = require("./database.config");
const http_config_1 = require("./http.config");
exports.default = {
    app: app_config_1.app,
    cookie: http_config_1.cookie,
    database: database_config_1.database,
    log: app_config_1.log,
    session: http_config_1.session,
    token: api_config_1.token,
};
//# sourceMappingURL=index.js.map