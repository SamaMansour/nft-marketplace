"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceCtegoryByString1681728874882 = void 0;
class ReplaceCtegoryByString1681728874882 {
    constructor() {
        this.name = 'ReplaceCtegoryByString1681728874882';
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
exports.ReplaceCtegoryByString1681728874882 = ReplaceCtegoryByString1681728874882;
//# sourceMappingURL=1681728874882-ReplaceCtegoryByString.js.map