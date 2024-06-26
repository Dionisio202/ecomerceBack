import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MarcasModule } from './marcas/marcas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosModule } from './pedidos/pedidos.module';
import { DetallePedidosModule } from './detalle-pedidos/detalle-pedidos.module';
import { ClientesModule } from './clientes/clientes.module';
import { CarritoComprasModule } from './carrito-compras/carrito-compras.module';
import { DetalleCarritoComprasModule } from './detalle-carrito-compras/detalle-carrito-compras.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'dionisio202',
      database: 'ecommerce_db',   
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductosModule,
    CategoriasModule,
    MarcasModule,
    PedidosModule,
    DetallePedidosModule,
    ClientesModule,
    CarritoComprasModule,
    DetalleCarritoComprasModule,
      UsersModule,
    AuthModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
