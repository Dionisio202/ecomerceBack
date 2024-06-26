import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { CarritoCompra } from '../../carrito-compras/entities/carrito-compra.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    role: string;

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
