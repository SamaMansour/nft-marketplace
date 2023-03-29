import { CreateAssetInput } from '../dto/create-asset.input';
import { Repository } from 'typeorm';
import { AssetEntity } from '../entities/asset.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { AssetSearchArgs } from '../../common/pagination-filtering/asset-search.args';
export declare class AssetsRepository extends Repository<AssetEntity> {
    getAssetAndOwner(id: string): Promise<AssetEntity>;
    createAsset(createAssetInput: CreateAssetInput, user: UserEntity): Promise<AssetEntity>;
    getAssets(assetSearchArgs: AssetSearchArgs): Promise<{
        assets: AssetEntity[];
        paginationInfo: {
            total: number;
            limit: number;
            offset: number;
        };
    }>;
}
