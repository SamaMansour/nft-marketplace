import { AssetSearchArgs } from '../../common/pagination-filtering/asset-search.args';
import { UserEntity } from '../../users/entities/user.entity';
import { CreateAssetInput } from '../dto/create-asset.input';
import { AssetEntity } from '../entities/asset.entity';
import { AssetsRepository } from '../repositories/assets.repository';
export declare class AssetsService {
    private readonly assetRepository;
    private readonly logger;
    constructor(assetRepository: AssetsRepository);
    createAsset(createAssetInput: CreateAssetInput, user: UserEntity): Promise<AssetEntity>;
    transferOwnership(asset: AssetEntity, newOwner: UserEntity): Promise<AssetEntity>;
    getAssets(assetSearchArgs: AssetSearchArgs): Promise<{
        assets: AssetEntity[];
        paginationInfo: {
            total: number;
            limit: number;
            offset: number;
        };
    }>;
    getAssetAndOwner(assetId: string): Promise<AssetEntity>;
    increaseAssetValue(asset: AssetEntity): Promise<AssetEntity>;
    removeAsset(id: string, user: UserEntity): Promise<AssetEntity>;
    restoreDeletedAsset(id: string): Promise<AssetEntity>;
}
