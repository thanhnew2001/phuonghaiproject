import { Injectable } from '@nestjs/common';
import { SensorsEntity } from './sensors.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository(SensorsEntity)
    private readonly SensorsRepo: Repository<SensorsEntity>,
  ) {}

  async findAll (): Promise<SensorsEntity[]> {
    return await this.SensorsRepo.find();
  }

  async findOne (id: number): Promise<SensorsEntity> {
    return await this.SensorsRepo.findOne(id)
  }


  async create (task: SensorsEntity): Promise<SensorsEntity> {
    return await this.SensorsRepo.save(task)
  }

  async update(task: SensorsEntity): Promise<UpdateResult> {
    return await this.SensorsRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.SensorsRepo.delete(id);
  }
}
