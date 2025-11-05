import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { User } from './dtos/User.dto';
import { UserService } from './User.service';
export declare class UserController implements CrudController<User> {
    service: UserService;
    constructor(service: UserService);
    get base(): CrudController<User>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<User> | User[]>;
    get(req: CrudRequest): Promise<User>;
    create(req: CrudRequest, dto: User): Promise<User>;
    createMany(req: CrudRequest, dto: CreateManyDto<User>): Promise<User[]>;
    update(req: CrudRequest, dto: User): Promise<User>;
    replace(req: CrudRequest, dto: User): Promise<User>;
    delete(req: CrudRequest): Promise<void | User>;
}
