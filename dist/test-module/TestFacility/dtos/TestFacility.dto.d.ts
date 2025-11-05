import * as enums from '../../enums';
export declare class TestFacilityCreate {
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
    customerId: number;
}
export declare class TestFacility {
    id: number;
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
    customerId: number;
    created_at: Date;
    updated_at: Date;
}
