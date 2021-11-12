import { Injectable } from '@nestjs/common';
import { LabControllerEntity } from './lab-controller.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class LabControllerService {
  constructor(
    @InjectRepository(LabControllerEntity)
    private readonly LabControllerRepo: Repository<LabControllerEntity>,
  ) {}

  async findAll (): Promise<LabControllerEntity[]> {
    return await this.LabControllerRepo.find();
  }

  async findOne (id: number): Promise<LabControllerEntity> {
    return await this.LabControllerRepo.findOne(id)
  }


  async create (task: LabControllerEntity): Promise<LabControllerEntity> {
    return await this.LabControllerRepo.save(task)
  }

  async update(task: LabControllerEntity): Promise<UpdateResult> {
    return await this.LabControllerRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.LabControllerRepo.delete(id);
  }
}
