import { CreateRamStatusInput } from '@/ram-status/dto/create-ram-status.input';
import { UpdateRamStatusInput } from '@/ram-status/dto/update-ram-status.input';
import { RamStatus } from '@/ram-status/entities/ram-status.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RamStatusService {
  constructor(
    @InjectRepository(RamStatus)
    private readonly ramStatusRepository: Repository<RamStatus>,
  ) {}

  create(_createRamStatusInput: CreateRamStatusInput) {
    return 'This action adds a new ramStatus';
  }

  async findAll(): Promise<RamStatus[]> {
    return this.ramStatusRepository.find();
  }

  async findOne(id: number): Promise<RamStatus | null> {
    return this.ramStatusRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateRamStatusInput: UpdateRamStatusInput) {
    return `This action updates a #${id.toString()} ramStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} ramStatus`;
  }
}
