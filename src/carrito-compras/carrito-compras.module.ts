import { Module } from '@nestjs/common';
import { CarritoComprasService } from './carrito-compras.service';
import { CarritoComprasController } from './carrito-compras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoCompra } from './entities/carrito-compra.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarritoCompra,User])],
  controllers: [CarritoComprasController],
  providers: [CarritoComprasService],
  exports: [TypeOrmModule],
})
export class CarritoComprasModule { }
