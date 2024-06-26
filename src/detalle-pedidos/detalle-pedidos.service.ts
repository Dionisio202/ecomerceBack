import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDetallePedidoDto } from './dto/create-detalle-pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetallePedido } from './entities/detalle-pedido.entity';
import { Repository } from 'typeorm';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()
export class DetallePedidosService {

  constructor(
    @InjectRepository(DetallePedido)
    private readonly detallePedidoRepository: Repository<DetallePedido>,

    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) { }

  async create(createDetallePedidoDto: CreateDetallePedidoDto) {
    const pedido = await this.pedidoRepository.findOneBy({ order_id: createDetallePedidoDto.pedido });
    if (!pedido) {
      throw new BadRequestException("el pedido no existe");
    }
    const producto = await this.productoRepository.findOneBy({ product_id: createDetallePedidoDto.producto });
    if (!producto) {
      throw new BadRequestException("el producto no existe");
    }
    return await this.detallePedidoRepository.save({
      ...createDetallePedidoDto,
      pedido,
      producto
    });
  }

  async findAll() {
    return await this.detallePedidoRepository.find();
  }

  async findOne(id: number) {
    const detalle = await this.detallePedidoRepository.findOneBy({ order_detail_id: id });
    if (!detalle) {
      throw new BadRequestException("el detalle del pedido no existe");
    }
    return detalle;
  }

  async update(id: number, updateDetallePedidoDto: UpdateDetallePedidoDto) {
    const pedido = await this.pedidoRepository.findOneBy({ order_id: updateDetallePedidoDto.pedido });
    if (!pedido) {
      throw new BadRequestException("el pedido no existe");
    }
    const producto = await this.productoRepository.findOneBy({ product_id: updateDetallePedidoDto.producto });
    if (!producto) {
      throw new BadRequestException("el producto no existe");
    }
    return await this.detallePedidoRepository.update(id, {
      ...updateDetallePedidoDto,
      pedido,
      producto
    });
  }

  async remove(id: number) {
    const detalle = await this.detallePedidoRepository.findOneBy({ order_detail_id: id });
    if (!detalle) {
      throw new BadRequestException("el detalle del pedido no existe");
    }
    return await this.detallePedidoRepository.delete({ order_detail_id: id });
  }
}
