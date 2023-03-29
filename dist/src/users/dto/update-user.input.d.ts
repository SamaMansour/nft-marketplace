import Gender from '../enums/gender.enum';
export declare class UpdateUserInput {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    aboutMe?: string;
    birthDate?: Date;
    gender?: Gender;
}
