import { PaginationArgs } from '../../common/pagination-filtering/pagination.args';
import { CommentsService } from '../../comments/services/comments.service';
import { AssetsService } from '../services/assets.service';
import { CreateAssetInput } from '../dto/create-asset.input';
import { Asset } from '../models/asset.model';
import { AssetSearchArgs } from '../../common/pagination-filtering/asset-search.args';
import { UserEntity } from '../../users/entities/user.entity';
import { CommentsLoader } from '../../comments/loaders/comments.loader';
export declare class AssetResolver {
    private readonly assetsService;
    private readonly commentsService;
    private readonly commentsLoader;
    constructor(assetsService: AssetsService, commentsService: CommentsService, commentsLoader: CommentsLoader);
    createAsset(createAssetInput: CreateAssetInput, user: UserEntity): Promise<import("../entities/asset.entity").AssetEntity>;
    getAllAssets(args: AssetSearchArgs): Promise<{
        assets: import("../entities/asset.entity").AssetEntity[];
        paginationInfo: {
            total: number;
            limit: number;
            offset: number;
        };
    }>;
    getAssetById(assetId: string): Promise<import("../entities/asset.entity").AssetEntity>;
    comments(asset: Asset, args: PaginationArgs): Promise<import("../../comments/entities/comment.entity").CommentEntity[]>;
    deleteAsset(assetId: string, user: UserEntity): Promise<import("../entities/asset.entity").AssetEntity>;
    restoreDeletedAsset(id: string): Promise<import("../entities/asset.entity").AssetEntity>;
}
