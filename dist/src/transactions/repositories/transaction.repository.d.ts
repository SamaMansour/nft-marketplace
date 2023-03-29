import { Repository } from 'typeorm';
import { TransactionEntity } from '../entities/transaction.entity';
export declare class TransactionRepository extends Repository<TransactionEntity> {
    createTransaction(transactionData: TransactionEntity): Promise<TransactionEntity>;
}
