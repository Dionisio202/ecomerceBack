import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class PedidosService {

  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,

    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) { }

  async create(createPedidoDto: CreatePedidoDto) {
    const cliente = await this.clienteRepository.findOneBy({ client_id: createPedidoDto.cliente });
    if (!cliente) {
      throw new BadRequestException("el cliente no existe");
    }
    return await this.pedidoRepository.save({
      ...createPedidoDto,
      cliente
    });
  }

  async findAll() {
    return await this.pedidoRepository.find();
  }

  async findOne(id: number) {
    const pedido = await this.pedidoRepository.findOneBy({ order_id: id });
    if (!pedido) {
      throw new BadRequestException("el pedido no existe");
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const cliente = await this.clienteRepository.findOneBy({ client_id: updatePedidoDto.cliente });
    if (!cliente) {
      throw new BadRequestException("el cliente no existe");
    }
    const pedido = await this.pedidoRepository.findOneBy({ order_id: id });
    if (!pedido) {
      throw new BadRequestException("el pedido no existe");
    }
    return await this.pedidoRepository.update(id, {
      ...updatePedidoDto,
      cliente
    });
  }

  async remove(id: number) {
    const pedido = await this.pedidoRepository.findOneBy({ order_id: id });
    if (!pedido) {
      throw new BadRequestException("el pedido no existe");
    }
    return await this.pedidoRepository.delete({ order_id: id });
  }
}
