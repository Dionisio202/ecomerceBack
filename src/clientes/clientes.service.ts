import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteserviceRepository: Repository<Cliente>,
  ) { }

  async create(createClienteDto: CreateClienteDto) {
    return await this.clienteserviceRepository.save(createClienteDto);
  }

  async findAll() {
    return await this.clienteserviceRepository.find();
  }

  async findOne(id: number) {
    const cliente = await this.clienteserviceRepository.findOneBy({ client_id: id })
    if (!cliente) {
      throw new BadRequestException("El cliente no existe");
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.clienteserviceRepository.findOneBy({ client_id: id })
    if (!cliente) {
      throw new BadRequestException("El cliente no existe");
    }
    return await this.clienteserviceRepository.update(id, updateClienteDto);
  }

  async remove(id: number) {
    const cliente = await this.clienteserviceRepository.findOneBy({ client_id: id })
    if (!cliente) {
      throw new BadRequestException("El cliente no existe");
    }
    return await this.clienteserviceRepository.delete({ client_id: id });
  }
}
