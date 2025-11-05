"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFacilityModule = void 0;
const common_1 = require("@nestjs/common");
const TestFacility_entity_1 = require("./TestFacility.entity");
const typeorm_1 = require("@nestjs/typeorm");
const TestFacility_service_1 = require("./TestFacility.service");
const TestFacility_controller_1 = require("./TestFacility.controller");
let TestFacilityModule = class TestFacilityModule {
};
exports.TestFacilityModule = TestFacilityModule;
exports.TestFacilityModule = TestFacilityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([TestFacility_entity_1.TestFacility])],
        providers: [TestFacility_service_1.TestFacilityService],
        exports: [TestFacility_service_1.TestFacilityService],
        controllers: [TestFacility_controller_1.TestFacilityController],
    })
], TestFacilityModule);
//# sourceMappingURL=TestFacility.module.js.map