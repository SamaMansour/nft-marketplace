import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddDates1681902001869 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
