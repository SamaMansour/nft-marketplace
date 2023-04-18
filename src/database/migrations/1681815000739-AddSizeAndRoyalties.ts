import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSizeAndRoyalties1681815000739 implements MigrationInterface {
    name = 'AddSizeAndRoyalties1681815000739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" ADD "royalties" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "size" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "royalties"`);
    }

}
