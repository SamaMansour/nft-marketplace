"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSizeAndRoyalties1681815000739 = void 0;
class AddSizeAndRoyalties1681815000739 {
    constructor() {
        this.name = 'AddSizeAndRoyalties1681815000739';
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
exports.AddSizeAndRoyalties1681815000739 = AddSizeAndRoyalties1681815000739;
//# sourceMappingURL=1681815000739-AddSizeAndRoyalties.js.map