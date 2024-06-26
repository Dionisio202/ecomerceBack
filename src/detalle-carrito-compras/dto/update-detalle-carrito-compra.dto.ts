import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleCarritoCompraDto } from './create-detalle-carrito-compra.dto';

export class UpdateDetalleCarritoCompraDto extends PartialType(CreateDetalleCarritoCompraDto) {}
