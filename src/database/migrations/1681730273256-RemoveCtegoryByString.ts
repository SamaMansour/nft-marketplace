import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveCtegoryByString1681730273256 implements MigrationInterface {
    name = 'RemoveCtegoryByString1681730273256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" text array NOT NULL`);
    }

}
