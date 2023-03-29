import { WalletsService } from './../../users/services/wallets.service';
import { TransactionRepository } from './../repositories/transaction.repository';
import { Connection } from 'typeorm';
import { AssetsService } from '../../assets/services/assets.service';
import { UserEntity } from '../../users/entities/user.entity';
export declare class TransactionsService {
    private readonly transactionRepository;
    private readonly walletsService;
    private readonly assetsService;
    private connection;
    private logger;
    constructor(transactionRepository: TransactionRepository, walletsService: WalletsService, assetsService: AssetsService, connection: Connection);
    buyAsset(assetId: string, buyer: UserEntity): Promise<import("../entities/transaction.entity").TransactionEntity>;
    viewTransactions(user: UserEntity): Promise<import("../entities/transaction.entity").TransactionEntity[]>;
    private validateTransaction;
    private createBuyTransactionEntity;
}
