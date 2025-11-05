import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
export default class FacilitiesSeeder implements Seeder {
    run(dataSource: DataSource): Promise<void>;
}
