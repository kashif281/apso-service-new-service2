import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
export default class CustomerSeeder implements Seeder {
    run(dataSource: DataSource): Promise<void>;
}
