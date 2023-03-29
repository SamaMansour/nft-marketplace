import { Asset } from '../../assets/models/asset.model';
import Gender from '../enums/gender.enum';
export declare class User {
    id: string;
    username: string;
    email: string;
    aboutMe?: string;
    firstName: string;
    lastName: string;
    balance: number;
    birthDate: Date;
    gender: Gender;
    assets?: Asset[];
}
