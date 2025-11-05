import * as enums from '../enums';
import { TestCustomer } from '../TestCustomer/TestCustomer.entity';
export declare class TestFacility {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    contactName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    status: enums.FacilityStatusEnum;
    weight: string;
    customer: TestCustomer;
    customerId: number;
}
