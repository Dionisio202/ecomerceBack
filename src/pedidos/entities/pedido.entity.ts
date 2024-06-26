import { User } from './../../users/entities/user.entity';
import { DetallePedido } from "src/detalle-pedidos/entities/detalle-pedido.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {

    @PrimaryGeneratedColumn()
    order_id: number;

    @ManyToOne(() => User, cliente => cliente.id, {
        onDelete: 'CASCADE',
    })
    cliente: User;

    @Column()
    order_date: Date;

    @Column()
    status: string;

    @Column()
    payment_method: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total_amount: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    discount_amount: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    tax_amount: number;

    @OneToMany(() => DetallePedido, detallePedido => detallePedido.pedido, {
        eager: true,
        cascade: true,
    })
    detalles: DetallePedido[];
}
