import { UserEntity } from '../../users/entities/user.entity';
import { TransactionsService } from '../services/transactions.service';
export declare class TransactionsResolver {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    buyAsset(assetId: string, user: UserEntity): Promise<import("../entities/transaction.entity").TransactionEntity>;
    viewTransactions(user: UserEntity): Promise<import("../entities/transaction.entity").TransactionEntity[]>;
}
