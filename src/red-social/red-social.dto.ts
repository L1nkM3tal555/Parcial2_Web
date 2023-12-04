import { IsDate, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class RedSocialDto {    
    @IsString()
    @IsNotEmpty()
    readonly id: string;
 
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;
 
    @IsString()
    @IsNotEmpty()
    readonly slogan: string;


}