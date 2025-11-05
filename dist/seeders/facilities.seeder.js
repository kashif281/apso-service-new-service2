"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCustomer_entity_1 = require("../test-module/TestCustomer/TestCustomer.entity");
const common_1 = require("@nestjs/common");
const seed_data_1 = require("../test-module//TestFacility/seeds/seed-data");
const TestFacility_entity_1 = require("../test-module/TestFacility/TestFacility.entity");
class FacilitiesSeeder {
    async run(dataSource) {
        try {
            const allCustomers = await dataSource.getRepository(TestCustomer_entity_1.TestCustomer).find();
            const facilityRepository = dataSource.getRepository(TestFacility_entity_1.TestFacility);
            const facilities = await facilityRepository.find();
            if (allCustomers.length && !facilities.length) {
                const createdFacilities = facilityRepository.create(seed_data_1.FacilityData);
                const updatedFacilities = [];
                for (let index = 0; index < createdFacilities.length; index++) {
                    const facility = createdFacilities[index];
                    facility.customerId = allCustomers[index].id;
                    updatedFacilities.push(facility);
                }
                await facilityRepository.save(updatedFacilities);
            }
            console.log('>>>>>>>>>>>>>>>>Facilities CREATED SUCCESSFULLY>>>>>>>>>>>>>>>>>>');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
}
exports.default = FacilitiesSeeder;
//# sourceMappingURL=facilities.seeder.js.map