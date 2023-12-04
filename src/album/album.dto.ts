import { IsDate, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class AlbumkDto {    
    @IsString()
    @IsNotEmpty()
    readonly id: string;
 
    @IsString()
    @IsNotEmpty()
    readonly fechaInicio: Date;
 
    @IsDate()
    @IsNotEmpty()
    readonly fechaFin: Date;

    @IsString()
    @IsNotEmpty()
    titulo: string;
}