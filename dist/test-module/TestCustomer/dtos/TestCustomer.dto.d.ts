import * as enums from '../../enums';
export declare class TestCustomerCreate {
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
}
export declare class TestCustomer {
    id: number;
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
    created_at: Date;
    updated_at: Date;
}
