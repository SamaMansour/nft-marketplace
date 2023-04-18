import {MigrationInterface, QueryRunner} from "typeorm";

export class ReplaceCtegoryByString1681728874882 implements MigrationInterface {
    name = 'ReplaceCtegoryByString1681728874882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" character varying NOT NULL`);
    }

}
