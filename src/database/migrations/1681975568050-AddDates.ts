import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDates1681975568050 implements MigrationInterface {
    name = 'AddDates1681975568050'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" ADD "startingDate" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "endingDate" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "endingDate"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "startingDate"`);
    }

}
