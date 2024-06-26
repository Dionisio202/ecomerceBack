import { Module } from '@nestjs/common';
import { DetallePedidosService } from './detalle-pedidos.service';
import { DetallePedidosController } from './detalle-pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedido } from './entities/detalle-pedido.entity';
import { PedidosModule } from 'src/pedidos/pedidos.module';
import { PedidosService } from 'src/pedidos/pedidos.service';
import { ProductosModule } from 'src/productos/productos.module';
import { ProductosService } from 'src/productos/productos.service';
import { MarcasModule } from 'src/marcas/marcas.module';
import { MarcasService } from 'src/marcas/marcas.service';
import { CategoriasModule } from 'src/categorias/categorias.module';
import { CategoriasService } from 'src/categorias/categorias.service';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedido]), PedidosModule, ProductosModule, MarcasModule, CategoriasModule],
  controllers: [DetallePedidosController],
  providers: [DetallePedidosService, PedidosService, ProductosService, MarcasService, CategoriasService],
})
export class DetallePedidosModule { }
