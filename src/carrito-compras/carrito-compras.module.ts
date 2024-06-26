import { Module } from '@nestjs/common';
import { CarritoComprasService } from './carrito-compras.service';
import { CarritoComprasController } from './carrito-compras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoCompra } from './entities/carrito-compra.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarritoCompra, Cliente])],
  controllers: [CarritoComprasController],
  providers: [CarritoComprasService],
  exports: [TypeOrmModule],
})
export class CarritoComprasModule { }
