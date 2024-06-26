import { CarritoCompra } from "src/carrito-compras/entities/carrito-compra.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    client_id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 15, unique: true })
    phone: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    address: string;

    @OneToMany(() => Pedido, pedido => pedido.cliente, {
        eager: true,
        cascade: true
    })
    pedidos: Pedido[];

    @OneToMany(() => CarritoCompra, carritoCompra => carritoCompra.cliente, {
        eager: true,
        cascade: true
    })
    carritos: CarritoCompra[];
}
