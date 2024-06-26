import { Type } from 'class-transformer';
import { IsString, IsNumber, IsPositive, IsInt, IsNotEmpty } from 'class-validator';

export class CreateProductoDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    stock: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    category: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    brand: number;
}
