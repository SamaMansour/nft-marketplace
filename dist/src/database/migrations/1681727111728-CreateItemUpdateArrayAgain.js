"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemUpdateArrayAgain1681727111728 = void 0;
class CreateItemUpdateArrayAgain1681727111728 {
    constructor() {
        this.name = 'CreateItemUpdateArrayAgain1681727111728';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "category" text array NOT NULL`);
    }
}
exports.CreateItemUpdateArrayAgain1681727111728 = CreateItemUpdateArrayAgain1681727111728;
//# sourceMappingURL=1681727111728-CreateItemUpdateArrayAgain.js.map