import { Injectable } from '@nestjs/common';
import { DatasensorsEntity } from './datasensors.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';


@Injectable()
export class DatasensorsService {
  constructor(
    @InjectRepository(DatasensorsEntity)
    private readonly DatasensorsRepo: Repository<DatasensorsEntity>,
  ) {}

  // async findAll (): Promise<DatasensorsEntity[]> {
  //   return await this.DatasensorsRepo.find();
  // }

  async findAll (): Promise<DatasensorsEntity[]> {

    const records = await this.DatasensorsRepo.createQueryBuilder()
    .orderBy('value', "DESC")
    .offset(0)
    .limit(10)
    .getMany()



    return records
  }

 
  async findOne (id: number): Promise<DatasensorsEntity> {
    return await this.DatasensorsRepo.findOne(id)
  }


  async create (task: DatasensorsEntity): Promise<DatasensorsEntity> {
    return await this.DatasensorsRepo.save(task)
  }

  async update(task: DatasensorsEntity): Promise<UpdateResult> {
    return await this.DatasensorsRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.DatasensorsRepo.delete(id);
  }

  


}
