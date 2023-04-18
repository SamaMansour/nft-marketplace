"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSizeAndRoyalties1681814433621 = void 0;
class AddSizeAndRoyalties1681814433621 {
    constructor() {
        this.name = 'AddSizeAndRoyalties1681814433621';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" ADD "royalties" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "asset" ADD "size" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "royalties"`);
    }
}
exports.AddSizeAndRoyalties1681814433621 = AddSizeAndRoyalties1681814433621;
//# sourceMappingURL=1681814433621-AddSizeAndRoyalties.js.map