"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDates1681975568050 = void 0;
class AddDates1681975568050 {
    constructor() {
        this.name = 'AddDates1681975568050';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" ADD "startingDate" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "endingDate" TIMESTAMP WITH TIME ZONE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "endingDate"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "startingDate"`);
    }
}
exports.AddDates1681975568050 = AddDates1681975568050;
//# sourceMappingURL=1681975568050-AddDates.js.map