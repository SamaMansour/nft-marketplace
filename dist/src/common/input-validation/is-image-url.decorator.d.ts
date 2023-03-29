import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsImageUrlConstraint implements ValidatorConstraintInterface {
    validate(imageUrl: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(validationArguments?: ValidationArguments): string;
}
export declare function IsImageUrl(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
