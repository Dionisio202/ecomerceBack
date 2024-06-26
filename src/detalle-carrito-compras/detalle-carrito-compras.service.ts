import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDetalleCarritoCompraDto } from './dto/create-detalle-carrito-compra.dto';
import { UpdateDetalleCarritoCompraDto } from './dto/update-detalle-carrito-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleCarritoCompra } from './entities/detalle-carrito-compra.entity';
import { Repository } from 'typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { CarritoCompra } from 'src/carrito-compras/entities/carrito-compra.entity';

@Injectable()
export class DetalleCarritoComprasService {

  constructor(
    @InjectRepository(DetalleCarritoCompra)
    private readonly detalleCarritoCompraRepository: Repository<DetalleCarritoCompra>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(CarritoCompra)
    private readonly carritoCompraRepository: Repository<CarritoCompra>,
  ) { }

  async create(createDetalleCarritoCompraDto: CreateDetalleCarritoCompraDto) {
    const carrito = await this.carritoCompraRepository.findOneBy({ cart_id: createDetalleCarritoCompraDto.carrito });
    if (!carrito) {
      throw new BadRequestException('El carrito no existe');
    }
    const producto = await this.productoRepository.findOneBy({ product_id: createDetalleCarritoCompraDto.producto });
    if (!producto) {
      throw new BadRequestException('El producto no existe');
    }
    return await this.detalleCarritoCompraRepository.save({
      ...createDetalleCarritoCompraDto,
      carrito,
      producto
    });
  }

  async findAll() {
    return await this.detalleCarritoCompraRepository.find();
  }

  async findOne(id: number) {
    const detalle = await this.detalleCarritoCompraRepository.findOneBy({ detail_id: id });
    if (!detalle) {
      throw new BadRequestException('El detalle del carrito no existe');
    }
    return detalle;
  }

  async update(id: number, updateDetalleCarritoCompraDto: UpdateDetalleCarritoCompraDto) {
    const detalle = await this.detalleCarritoCompraRepository.findOneBy({ detail_id: id });
    if (!detalle) {
      throw new BadRequestException('El detalle del carrito no existe');
    }
    const carrito = await this.carritoCompraRepository.findOneBy({ cart_id: updateDetalleCarritoCompraDto.carrito });
    if (!carrito) {
      throw new BadRequestException('El carrito no existe');
    }
    const producto = await this.productoRepository.findOneBy({ product_id: updateDetalleCarritoCompraDto.producto });
    if (!producto) {
      throw new BadRequestException('El producto no existe');
    }
    return await this.detalleCarritoCompraRepository.update(id, {
      ...updateDetalleCarritoCompraDto,
      carrito, producto
    });
  }

  async remove(id: number) {
    const detalle = await this.detalleCarritoCompraRepository.findOneBy({ detail_id: id });
    if (!detalle) {
      throw new BadRequestException('El detalle del carrito no existe');
    }
    return await this.detalleCarritoCompraRepository.delete({ detail_id: id });
  }
}
