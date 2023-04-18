"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemUpdate1681720808082 = void 0;
class CreateItemUpdate1681720808082 {
    constructor() {
        this.name = 'CreateItemUpdate1681720808082';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" text array NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" character varying NOT NULL`);
    }
}
exports.CreateItemUpdate1681720808082 = CreateItemUpdate1681720808082;
//# sourceMappingURL=1681720808082-CreateItemUpdate.js.map