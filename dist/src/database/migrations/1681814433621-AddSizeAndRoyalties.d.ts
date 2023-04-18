import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddSizeAndRoyalties1681814433621 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
