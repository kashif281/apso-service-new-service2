"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCustomer = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const crud_1 = require("@nestjsx/crud");
const enums = require("../enums");
const TestFacility_entity_1 = require("../TestFacility/TestFacility.entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let TestCustomer = class TestCustomer {
};
exports.TestCustomer = TestCustomer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TestCustomer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TestCustomer.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TestCustomer.prototype, "updated_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], TestCustomer.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], TestCustomer.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], TestCustomer.prototype, "streetAddress1", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], TestCustomer.prototype, "streetAddress2", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], TestCustomer.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], TestCustomer.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], TestCustomer.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TestCustomer.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TestCustomer.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums.CustomerStatusEnum,
        default: enums.CustomerStatusEnum.Active,
    }),
    __metadata("design:type", String)
], TestCustomer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TestFacility_entity_1.TestFacility, (facility) => facility.customer),
    __metadata("design:type", Array)
], TestCustomer.prototype, "facilities", void 0);
exports.TestCustomer = TestCustomer = __decorate([
    (0, typeorm_1.Entity)('test-customer')
], TestCustomer);
//# sourceMappingURL=TestCustomer.entity.js.map