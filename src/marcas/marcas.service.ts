import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarcasService {

  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) { }

  async create(createMarcaDto: CreateMarcaDto) {
    return await this.marcaRepository.save(createMarcaDto);
  }

  async findAll() {
    return await this.marcaRepository.find();
  }

  async findOne(id: number) {
    const marca = await this.marcaRepository.findOneBy({ brand_id: id });
    if (!marca) {
      throw new BadRequestException("La marca no existe");
    }
    return marca;
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    const marca = await this.marcaRepository.findOneBy({ brand_id: id });
    if (!marca) {
      throw new BadRequestException("La marca no existe");
    }
    return await this.marcaRepository.update(id, updateMarcaDto);
  }

  async remove(id: number) {
    const marca = await this.marcaRepository.findOneBy({ brand_id: id });
    if (!marca) {
      throw new BadRequestException("La marca no existe");
    }
    return await this.marcaRepository.delete({ brand_id: id });
  }
}
