import Gender from '../enums/gender.enum';
export declare class RegisterUserInput {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthDate: Date;
    gender?: Gender;
}
