import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Marca } from 'src/marcas/entities/marca.entity';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,

    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) { }

  async create(createProductoDto: CreateProductoDto) {
    const category = await this.categoriaRepository.findOneBy({ category_id: createProductoDto.category });
    if (!category) {
      throw new BadRequestException("La categoria no existe");
    }
    const brand = await this.marcaRepository.findOneBy({ brand_id: createProductoDto.brand });
    if (!brand) {
      throw new BadRequestException("La marca no existe");
    }

    return await this.productoRepository.save({
      ...createProductoDto,
      category,
      brand,
    });
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id: number) {
    const producto = await this.productoRepository.findOneBy({ product_id: id });
    if (!producto) {
      throw new BadRequestException("el producto no existe");
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.productoRepository.findOneBy({ product_id: id });
    if (!producto) {
      throw new BadRequestException("el producto no existe");
    }
    const category = await this.categoriaRepository.findOneBy({ category_id: updateProductoDto.category });
    if (!category) {
      throw new BadRequestException("La categoria no existe");
    }
    const brand = await this.marcaRepository.findOneBy({ brand_id: updateProductoDto.brand });
    if (!brand) {
      throw new BadRequestException("La marca no existe");
    }
    return await this.productoRepository.update(id, {
      ...updateProductoDto,
      category,
      brand
    });
  }

  async remove(id: number) {
    const producto = await this.productoRepository.findOneBy({ product_id: id });
    if (!producto) {
      throw new BadRequestException("el producto no existe");
    }
    return await this.productoRepository.delete({ product_id: id });
  }
}
