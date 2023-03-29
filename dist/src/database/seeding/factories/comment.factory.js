"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const comment_entity_1 = require("./../../../comments/entities/comment.entity");
(0, typeorm_seeding_1.define)(comment_entity_1.CommentEntity, (faker) => {
    const comment = new comment_entity_1.CommentEntity();
    comment.comment = faker.lorem.sentence();
    return comment;
});
//# sourceMappingURL=comment.factory.js.map