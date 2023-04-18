import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeImageURLToBlob1681816325369 implements MigrationInterface {
    name = 'ChangeImageURLToBlob1681816325369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "imageUrl" bytea`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "imageUrl" character varying NOT NULL`);
    }

}
