"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDates1681902001869 = void 0;
class AddDates1681902001869 {
    constructor() {
        this.name = 'AddDates1681902001869';
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
exports.AddDates1681902001869 = AddDates1681902001869;
//# sourceMappingURL=1681902001869-AddDates.js.map