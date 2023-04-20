import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddDates1681975568050 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
