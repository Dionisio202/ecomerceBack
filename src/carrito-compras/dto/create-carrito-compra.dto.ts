import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCarritoCompraDto {

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    cliente: number;
}
