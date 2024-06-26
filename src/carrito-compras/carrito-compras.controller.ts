import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarritoComprasService } from './carrito-compras.service';
import { CreateCarritoCompraDto } from './dto/create-carrito-compra.dto';
import { UpdateCarritoCompraDto } from './dto/update-carrito-compra.dto';

@Controller('carrito-compras')
export class CarritoComprasController {
  constructor(private readonly carritoComprasService: CarritoComprasService) {}

  @Post()
  create(@Body() createCarritoCompraDto: CreateCarritoCompraDto) {
    return this.carritoComprasService.create(createCarritoCompraDto);
  }

  @Get()
  findAll() {
    return this.carritoComprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoComprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarritoCompraDto: UpdateCarritoCompraDto) {
    return this.carritoComprasService.update(+id, updateCarritoCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritoComprasService.remove(+id);
  }
}
