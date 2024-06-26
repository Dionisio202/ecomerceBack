import { DetalleCarritoCompra } from "src/detalle-carrito-compras/entities/detalle-carrito-compra.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CarritoCompra {

    @PrimaryGeneratedColumn()
    cart_id: number;

    @ManyToOne(() => User, cliente => cliente.id, {
        onDelete: 'CASCADE'
    })
    cliente: User;

    @OneToMany(() => DetalleCarritoCompra, detalle => detalle.carrito, {
        eager: true,
        cascade: true
    })
    detalles: DetalleCarritoCompra[];

}
