import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DetallePedido {

    @PrimaryGeneratedColumn()
    order_detail_id: number;

    @ManyToOne(() => Pedido, pedido => pedido.order_id, {
        onDelete: 'CASCADE'
    })
    pedido: Pedido;

    @ManyToOne(() => Producto, producto => producto.product_id, {
        onDelete: 'CASCADE'
    })
    producto: Producto;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    discount_amount: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    tax_amount: number;
}
