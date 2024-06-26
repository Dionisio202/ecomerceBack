import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleCarritoComprasService } from './detalle-carrito-compras.service';
import { CreateDetalleCarritoCompraDto } from './dto/create-detalle-carrito-compra.dto';
import { UpdateDetalleCarritoCompraDto } from './dto/update-detalle-carrito-compra.dto';

@Controller('detalle-carrito-compras')
export class DetalleCarritoComprasController {
  constructor(private readonly detalleCarritoComprasService: DetalleCarritoComprasService) {}

  @Post()
  create(@Body() createDetalleCarritoCompraDto: CreateDetalleCarritoCompraDto) {
    return this.detalleCarritoComprasService.create(createDetalleCarritoCompraDto);
  }

  @Get()
  findAll() {
    return this.detalleCarritoComprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleCarritoComprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleCarritoCompraDto: UpdateDetalleCarritoCompraDto) {
    return this.detalleCarritoComprasService.update(+id, updateDetalleCarritoCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleCarritoComprasService.remove(+id);
  }
}
