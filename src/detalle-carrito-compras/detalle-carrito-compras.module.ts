import { Module } from '@nestjs/common';
import { DetalleCarritoComprasService } from './detalle-carrito-compras.service';
import { DetalleCarritoComprasController } from './detalle-carrito-compras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleCarritoCompra } from './entities/detalle-carrito-compra.entity';
import { CarritoComprasModule } from 'src/carrito-compras/carrito-compras.module';
import { CarritoComprasService } from 'src/carrito-compras/carrito-compras.service';
import { ProductosModule } from 'src/productos/productos.module';
import { ProductosService } from 'src/productos/productos.service';
import { MarcasModule } from 'src/marcas/marcas.module';
import { CategoriasModule } from 'src/categorias/categorias.module';
import { MarcasService } from 'src/marcas/marcas.service';
import { CategoriasService } from 'src/categorias/categorias.service';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleCarritoCompra]), CarritoComprasModule, ProductosModule, MarcasModule, CategoriasModule],
  controllers: [DetalleCarritoComprasController],
  providers: [DetalleCarritoComprasService, CarritoComprasService, ProductosService, MarcasService, CategoriasService],
  exports: [TypeOrmModule],
})
export class DetalleCarritoComprasModule { }
