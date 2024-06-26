import { CarritoCompra } from "src/carrito-compras/entities/carrito-compra.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DetalleCarritoCompra {

    @PrimaryGeneratedColumn()
    detail_id: number;

    @ManyToOne(() => CarritoCompra, carrito => carrito.cart_id, {
        onDelete: 'CASCADE'
    })
    carrito: CarritoCompra;

    @ManyToOne(() => Producto, producto => producto.product_id, {
        onDelete: 'CASCADE'
    })
    producto: Producto;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    unit_price: number;
}
