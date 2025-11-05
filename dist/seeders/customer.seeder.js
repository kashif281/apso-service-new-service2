"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCustomer_entity_1 = require("../test-module/TestCustomer/TestCustomer.entity");
const common_1 = require("@nestjs/common");
const seed_data_1 = require("../test-module/TestCustomer/seeds/seed-data");
class CustomerSeeder {
    async run(dataSource) {
        try {
            const customerRepository = dataSource.getRepository(TestCustomer_entity_1.TestCustomer);
            const allCustomers = await customerRepository.find();
            if (!allCustomers.length) {
                const customers = customerRepository.create(seed_data_1.CustomerData);
                await customerRepository.save(customers);
            }
            console.log('>>>>>>>>>>>>>>>>CUSTOMERS CREATED SUCCESSFULLY>>>>>>>>>>>>>>>>>>');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
}
exports.default = CustomerSeeder;
//# sourceMappingURL=customer.seeder.js.map