import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCarritoCompraDto } from './dto/create-carrito-compra.dto';
import { UpdateCarritoCompraDto } from './dto/update-carrito-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoCompra } from './entities/carrito-compra.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class CarritoComprasService {

  constructor(
    @InjectRepository(CarritoCompra)
    private readonly carritoCompraRepository: Repository<CarritoCompra>,

    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) { }

  async create(createCarritoCompraDto: CreateCarritoCompraDto) {
    const cliente = await this.clienteRepository.findOneBy({ client_id: createCarritoCompraDto.cliente });
    if (!cliente) {
      throw new BadRequestException("El cliente no existe");
    }
    return await this.carritoCompraRepository.save({
      ...createCarritoCompraDto,
      cliente
    });
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
    const cliente = await this.clienteRepository.findOneBy({ client_id: updateCarritoCompraDto.cliente });
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
