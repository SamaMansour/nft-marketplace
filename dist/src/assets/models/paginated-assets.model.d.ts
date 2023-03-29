import { PaginationInfo } from '../../common/pagination-filtering/pagination-info.output';
import { Asset } from './asset.model';
export declare class PaginatedAssets {
    paginationInfo?: PaginationInfo;
    assets: [Asset];
}
