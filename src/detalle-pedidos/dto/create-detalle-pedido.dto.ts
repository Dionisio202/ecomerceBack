import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDetallePedidoDto {


    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    pedido: number;

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
    price: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    discount_amount: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    tax_amount: number;
}
