import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItemUpdate1681720808082 implements MigrationInterface {
    name = 'CreateItemUpdate1681720808082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" character varying NOT NULL`);
    }

}
