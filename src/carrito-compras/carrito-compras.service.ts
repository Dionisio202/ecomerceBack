import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCarritoCompraDto } from './dto/create-carrito-compra.dto';
import { UpdateCarritoCompraDto } from './dto/update-carrito-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoCompra } from './entities/carrito-compra.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class CarritoComprasService {

  constructor(
    @InjectRepository(CarritoCompra)
    private readonly carritoCompraRepository: Repository<CarritoCompra>,

    @InjectRepository(User)
    private readonly clienteRepository: Repository<User>,
  ) { }

  async create(createCarritoCompraDto: CreateCarritoCompraDto) {
    try {
      console.log('Buscando usuario con ID:', createCarritoCompraDto.cliente);

      const user = await this.clienteRepository.findOne({
        where: { id: createCarritoCompraDto.cliente }
      });

      if (!user) {
        throw new BadRequestException("El usuario no existe");
      }

      const nuevoCarrito = this.carritoCompraRepository.create({
        cliente: user,
        // Aquí puedes agregar otros campos necesarios
      });

      return await this.carritoCompraRepository.save(nuevoCarrito);
    } catch (error) {
      console.error("Error creando el carrito de compras:", error);
    }
  }

  async findAll() {
    return await this.carritoCompraRepository.find();
  }

  async findOne(id: number) {
    const carrito = await this.carritoCompraRepository.findOneBy({ cart_id: id });
    if (!carrito) {
      throw new BadRequestException("El carrito de compras no existe");
    }
    return carrito;
  }

  async update(id: number, updateCarritoCompraDto: UpdateCarritoCompraDto) {
    const carrito = await this.carritoCompraRepository.findOneBy({ cart_id: id });
    if (!carrito) {
      throw new BadRequestException("El carrito de compras no existe");
    }
    const cliente = await this.clienteRepository.findOneBy({ id: updateCarritoCompraDto.cliente });
    if (!cliente) {
      throw new BadRequestException("El cliente no existe");
    }
    return await this.carritoCompraRepository.update(id, {
      ...updateCarritoCompraDto,
      cliente
    });
  }

  async remove(id: number) {
    const carrito = await this.carritoCompraRepository.findOneBy({ cart_id: id });
    if (!carrito) {
      throw new BadRequestException("El carrito de compras no existe");
    }
    return await this.carritoCompraRepository.delete({ cart_id: id });
  }
}
