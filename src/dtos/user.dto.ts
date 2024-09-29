import { IsBoolean, IsInt, IsString } from "class-validator";

export class UserDto{
    @IsString()
    id_key: string;
    @IsInt()
    index: number;
    @IsBoolean()
    isActive: boolean;
    @IsInt()
    age: number;
    @IsString()
    name: string;
}