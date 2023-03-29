import Gender from '../enums/gender.enum';
export declare class UserProfileOutput {
    id: string;
    username: string;
    email: string;
    aboutMe?: string;
    birthDate?: Date;
    gender: Gender;
    firstName: string;
    lastName: string;
}
