"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeImageURLToBlob1681816325369 = void 0;
class ChangeImageURLToBlob1681816325369 {
    constructor() {
        this.name = 'ChangeImageURLToBlob1681816325369';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "imageUrl" bytea`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "imageUrl" character varying NOT NULL`);
    }
}
exports.ChangeImageURLToBlob1681816325369 = ChangeImageURLToBlob1681816325369;
//# sourceMappingURL=1681816325369-ChangeImageURLToBlob.js.map