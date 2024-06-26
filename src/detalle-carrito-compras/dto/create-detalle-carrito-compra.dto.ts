import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDetalleCarritoCompraDto {

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    carrito: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    producto: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    quantity: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    unit_price: number;
    
}
