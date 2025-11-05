"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCustomerModule = void 0;
const common_1 = require("@nestjs/common");
const TestCustomer_entity_1 = require("./TestCustomer.entity");
const typeorm_1 = require("@nestjs/typeorm");
const TestCustomer_service_1 = require("./TestCustomer.service");
const TestCustomer_controller_1 = require("./TestCustomer.controller");
let TestCustomerModule = class TestCustomerModule {
};
exports.TestCustomerModule = TestCustomerModule;
exports.TestCustomerModule = TestCustomerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([TestCustomer_entity_1.TestCustomer])],
        providers: [TestCustomer_service_1.TestCustomerService],
        exports: [TestCustomer_service_1.TestCustomerService],
        controllers: [TestCustomer_controller_1.TestCustomerController],
    })
], TestCustomerModule);
//# sourceMappingURL=TestCustomer.module.js.map