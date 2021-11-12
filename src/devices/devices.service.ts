import { Injectable } from '@nestjs/common';
import { DevicesEntity } from './devices.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(DevicesEntity)
    private readonly DevicesRepo: Repository<DevicesEntity>,
  ) {}

  async findAll (): Promise<DevicesEntity[]> {
    return await this.DevicesRepo.find();
  }

  async findOne (id: number): Promise<DevicesEntity> {
    return await this.DevicesRepo.findOne(id)
  }


  async create (task: DevicesEntity): Promise<DevicesEntity> {
    return await this.DevicesRepo.save(task)
  }

  async update(task: DevicesEntity): Promise<UpdateResult> {
    return await this.DevicesRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.DevicesRepo.delete(id);
  }
}
