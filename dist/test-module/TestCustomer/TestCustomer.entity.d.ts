import * as enums from '../enums';
import { TestFacility } from '../TestFacility/TestFacility.entity';
export declare class TestCustomer {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    country: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    createdBy: string;
    status: enums.CustomerStatusEnum;
    facilities: TestFacility[];
}
