"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const User_dto_1 = require("./dtos/User.dto");
const User_controller_1 = require("./User.controller");
const User_service_1 = require("./User.service");
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
describe('UserController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: User_service_1.UserService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [User_controller_1.UserController],
            providers: [User_service_1.UserService, ApiServiceProvider],
        }).compile();
        controller = module.get(User_controller_1.UserController);
        spyService = module.get(User_service_1.UserService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call UserController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call UserController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new User_dto_1.User();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=User.controller.spec.js.map