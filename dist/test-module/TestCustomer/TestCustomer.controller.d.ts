import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { TestCustomer } from './dtos/TestCustomer.dto';
import { TestCustomerService } from './TestCustomer.service';
import { DataSource } from 'typeorm';
export declare class TestCustomerController implements CrudController<TestCustomer> {
    service: TestCustomerService;
    private dataSource;
    constructor(service: TestCustomerService, dataSource: DataSource);
    get base(): CrudController<TestCustomer>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<TestCustomer> | TestCustomer[]>;
    get(req: CrudRequest): Promise<TestCustomer>;
    create(req: CrudRequest, dto: TestCustomer): Promise<TestCustomer>;
    createMany(req: CrudRequest, dto: CreateManyDto<TestCustomer>): Promise<TestCustomer[]>;
    update(req: CrudRequest, dto: TestCustomer): Promise<TestCustomer>;
    replace(req: CrudRequest, dto: TestCustomer): Promise<TestCustomer>;
    delete(req: CrudRequest): Promise<void | TestCustomer>;
}
