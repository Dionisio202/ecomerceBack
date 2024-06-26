import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) { }

  async create(createCategoriaDto: CreateCategoriaDto) {
    return await this.categoriaRepository.save(createCategoriaDto);
  }

  async findAll() {
    return await this.categoriaRepository.find();
  }

  async findOne(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({ category_id: id });
    if (!categoria) {
      throw new BadRequestException("No existe esa categoria");
    }
    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.categoriaRepository.findOneBy({ category_id: id });
    if (!categoria) {
      throw new BadRequestException("No existe esa categoria");
    }
    return await this.categoriaRepository.update(id, updateCategoriaDto);
  }

  async remove(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({ category_id: id });
    if (!categoria) {
      throw new BadRequestException("No existe esa categoria");
    }
    return await this.categoriaRepository.delete({ category_id: id });
  }
}
