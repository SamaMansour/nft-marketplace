"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("../entities/transaction.entity");
let TransactionRepository = class TransactionRepository extends typeorm_1.Repository {
    async createTransaction(transactionData) {
        const newTransaction = this.create(transactionData);
        return await this.save(newTransaction);
    }
};
TransactionRepository = __decorate([
    (0, typeorm_1.EntityRepository)(transaction_entity_1.TransactionEntity)
], TransactionRepository);
exports.TransactionRepository = TransactionRepository;
//# sourceMappingURL=transaction.repository.js.map