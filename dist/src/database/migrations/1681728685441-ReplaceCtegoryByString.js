"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceCtegoryByString1681728685441 = void 0;
class ReplaceCtegoryByString1681728685441 {
    constructor() {
        this.name = 'ReplaceCtegoryByString1681728685441';
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
exports.ReplaceCtegoryByString1681728685441 = ReplaceCtegoryByString1681728685441;
//# sourceMappingURL=1681728685441-ReplaceCtegoryByString.js.map