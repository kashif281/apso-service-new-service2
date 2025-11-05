import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { TestFacility } from './dtos/TestFacility.dto';
import { TestFacilityService } from './TestFacility.service';
export declare class TestFacilityController implements CrudController<TestFacility> {
    service: TestFacilityService;
    constructor(service: TestFacilityService);
    get base(): CrudController<TestFacility>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<TestFacility> | TestFacility[]>;
    get(req: CrudRequest): Promise<TestFacility>;
    create(req: CrudRequest, dto: TestFacility): Promise<TestFacility>;
    createMany(req: CrudRequest, dto: CreateManyDto<TestFacility>): Promise<TestFacility[]>;
    update(req: CrudRequest, dto: TestFacility): Promise<TestFacility>;
    replace(req: CrudRequest, dto: TestFacility): Promise<TestFacility>;
    delete(req: CrudRequest): Promise<void | TestFacility>;
}
