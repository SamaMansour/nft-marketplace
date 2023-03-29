"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const role_enum_1 = require("../../../auth/enums/role.enum");
const user_entity_1 = require("../../../users/entities/user.entity");
const gender_enum_1 = require("../../../users/enums/gender.enum");
(0, typeorm_seeding_1.define)(user_entity_1.UserEntity, (faker) => {
    const user = new user_entity_1.UserEntity();
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.email = faker.internet.email();
    user.password = faker.internet.password();
    user.username = faker.internet.userName();
    user.birthDate = faker.date.past();
    user.gender = gender_enum_1.default.Male;
    user.role = role_enum_1.default.Admin;
    user.aboutMe = faker.lorem.sentence();
    const createdAt = new Date();
    user.createdAt = createdAt;
    user.updatedAt = createdAt;
    return user;
});
//# sourceMappingURL=user.factory.js.map