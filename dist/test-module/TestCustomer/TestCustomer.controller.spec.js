"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const testing_1 = require("@nestjs/testing");
const TestCustomer_entity_1 = require("./TestCustomer.entity");
const TestFacility_entity_1 = require("../TestFacility/TestFacility.entity");
const TestCustomer_controller_1 = require("./TestCustomer.controller");
const TestCustomer_service_1 = require("./TestCustomer.service");
const TypeormTestingModule_1 = require("../test-utils/TypeormTestingModule");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
describe('TestCustomerController', () => {
    let app;
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                (0, TypeormTestingModule_1.TypeORMMySqlTestingModule)([TestCustomer_entity_1.TestCustomer, TestFacility_entity_1.TestFacility]),
                typeorm_1.TypeOrmModule.forFeature([TestCustomer_entity_1.TestCustomer, TestFacility_entity_1.TestFacility]),
            ],
            controllers: [TestCustomer_controller_1.TestCustomerController],
            providers: [TestCustomer_service_1.TestCustomerService],
        }).compile();
        app = module.createNestApplication();
        await app.init();
        controller = module.get(TestCustomer_controller_1.TestCustomerController);
    });
    afterAll(async () => {
        await app.close();
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call CustomerController get method with fields and join', async () => {
        const response = await request(app.getHttpServer()).get('/TestCustomers?fields=status&join=facilities');
        const { body: { data } = {} } = response;
        expect(response.status).toBe(200);
        expect(data).toBeDefined();
        expect(data.length).toBe(5);
        expect(data[0].facilities).toBeDefined();
        expect(data[0].facilities[0].id).toBeTruthy();
    });
    it('should call CustomerController get method with join and filter', async () => {
        var _a;
        const response = await request(app.getHttpServer()).get('/TestCustomers?join[]=facilities||id,status&filter[0]=id||$eq||4');
        const { body: { data } = {} } = response;
        expect((_a = data[0]) === null || _a === void 0 ? void 0 : _a.id).toBe(4);
    });
    it('should call CustomerController get method with search containing "D"', async () => {
        const response = await request(app.getHttpServer()).get('/TestCustomers?s={"name": {"$contL": "David"}}');
        const { body: { data } = {} } = response;
        expect(response.status).toBe(200);
        expect(data).toBeDefined();
        expect(data[0].name).toBe('David Lee');
    });
    it('should call CustomerController get method with complex search and condition', async () => {
        const response = await request(app.getHttpServer()).get('/TestCustomers?s={"$and": [{"status": {"$eq":"Active"}},{"name": {"$ends": "Smith"}}]}');
        const { body: { data } = {} } = response;
        expect(response.status).toBe(200);
        expect(data).toBeDefined();
        expect(data[0].name).toBe('Jane Smith');
    });
    it('should call CustomerController get method with filter in condition', async () => {
        const response = await request(app.getHttpServer()).get('/TestCustomers?filter=state||$in||CA,NY');
        const { body: { data } = {} } = response;
        expect(response.status).toBe(200);
        expect(data).toBeDefined();
        expect(data.length).toBe(2);
    });
    it('should call CustomerController get method with given filter, fields and sort', async () => {
        const response = await request(app.getHttpServer()).get('/TestCustomers?fields=name,status&filter=city||$eq||New York&sort=name,ASC&page=1&limit=5');
        const { body: { data } = {} } = response;
        expect(response.status).toBe(200);
        expect(data).toBeDefined();
        expect(data[0].name).toBe('John Doe');
    });
    it('should call CustomerController get method with fields, join and on condition', async () => {
        const response = await request(app.getHttpServer()).get('/TestCustomers?fields=name&join[]=facilities||status||on[0]=facilities.status||$eq||Archived');
        const { body: { data } = {} } = response;
        expect(response.status).toBe(200);
        expect(data).toBeDefined();
    });
    it('should call CustomerController get method with fields, aggregate function and group by', async () => {
        const response = await request(app.getHttpServer()).get('/TestCustomers?fields=COUNT(id)&join[]=facilities||COUNT(id),status||on[0]=facilities.status||$eq||Archived&groupBy=1');
        const { body: { data } = {} } = response;
        expect(response.status).toBe(200);
        expect(data).toBeDefined();
    });
});
//# sourceMappingURL=TestCustomer.controller.spec.js.map