import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gathering } from './entities/gathering.entity';

@Injectable()
export class GatheringsService {
  constructor(
    @InjectRepository(Gathering)
    private gatheringRepository: Repository<Gathering>,
  ) {}

  async create(createGatheringDto: Partial<Gathering>): Promise<Gathering> {
    const gathering = this.gatheringRepository.create(createGatheringDto);
    return await this.gatheringRepository.save(gathering);
  }

  async findAll(): Promise<Gathering[]> {
    return await this.gatheringRepository.find();
  }

  async findOne(id: number): Promise<Gathering | null> {
    return await this.gatheringRepository.findOne({ where: { id } });
  }

  async update(id: number, updateGatheringDto: Partial<Gathering>): Promise<Gathering | null> {
    await this.gatheringRepository.update(id, updateGatheringDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.gatheringRepository.delete(id);
  }
}
