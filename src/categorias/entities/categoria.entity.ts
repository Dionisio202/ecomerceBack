import { Producto } from 'src/productos/entities/producto.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @OneToMany(() => Producto, producto => producto.category, {
        eager: true,
        cascade: true
    })
    productos: Producto[];
}
