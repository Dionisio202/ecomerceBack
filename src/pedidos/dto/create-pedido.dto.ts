import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePedidoDto {

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    cliente: number;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    order_date: Date;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    payment_method: string;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    total_amount: number;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    discount_amount: number;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    tax_amount: number;
}
