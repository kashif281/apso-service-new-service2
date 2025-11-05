"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const TestFacility_dto_1 = require("./dtos/TestFacility.dto");
const TestFacility_controller_1 = require("./TestFacility.controller");
const TestFacility_service_1 = require("./TestFacility.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('TestFacilityController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: TestFacility_service_1.TestFacilityService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [TestFacility_controller_1.TestFacilityController],
            providers: [TestFacility_service_1.TestFacilityService, ApiServiceProvider],
        }).compile();
        controller = module.get(TestFacility_controller_1.TestFacilityController);
        spyService = module.get(TestFacility_service_1.TestFacilityService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call FacilityController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call FacilityController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new TestFacility_dto_1.TestFacility();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=TestFacility.controller.spec.js.map