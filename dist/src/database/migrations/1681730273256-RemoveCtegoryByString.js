"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCtegoryByString1681730273256 = void 0;
class RemoveCtegoryByString1681730273256 {
    constructor() {
        this.name = 'RemoveCtegoryByString1681730273256';
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
exports.RemoveCtegoryByString1681730273256 = RemoveCtegoryByString1681730273256;
//# sourceMappingURL=1681730273256-RemoveCtegoryByString.js.map