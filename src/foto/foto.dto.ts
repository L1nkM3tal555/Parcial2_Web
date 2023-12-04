import { IsDate, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class FotoDto {    
    @IsString()
    @IsNotEmpty()
    readonly id: string;
 
    @IsDate()
    @IsNotEmpty()
    readonly fecha: Date;
 
    @IsNumber()
    @IsNotEmpty()
    readonly iso: number;

    @IsNumber()
    @IsNotEmpty()
    readonly velObturacion: number;

    @IsNumber()
    @IsNotEmpty()
    readonly apertura: number;
}