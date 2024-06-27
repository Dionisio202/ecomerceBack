import { Categoria } from 'src/categorias/entities/categoria.entity';
import { DetalleCarritoCompra } from 'src/detalle-carrito-compras/entities/detalle-carrito-compra.entity';
import { DetallePedido } from 'src/detalle-pedidos/entities/detalle-pedido.entity';
import { Marca } from 'src/marcas/entities/marca.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Repository, OneToMany } from 'typeorm';

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({ type: 'varchar', length: 255, unique: true })
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'int' })
    stock: number;

    @ManyToOne(() => Categoria, categoria => categoria.category_id, {
        onDelete: "CASCADE"
    })
    category: Categoria;

    @ManyToOne(() => Marca, marca => marca.brand_id, {
        onDelete: "CASCADE"
    })
    brand: Marca;

    @OneToMany(() => DetallePedido, account => account.producto, {
        eager: true,
        cascade: true,
    })
    accounts: DetallePedido[];

    @OneToMany(() => DetalleCarritoCompra, detallePedidoCarrito => detallePedidoCarrito.producto, {
        eager: true,
        cascade: true,
    })
    detalleCarritoPedido: DetalleCarritoCompra[];
}
