import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DatasensorsService } from './datasensors.service'
import { DatasensorsEntity } from './datasensors.entity'


@Controller('datasensors')
export class DatasensorsController {
  constructor(private readonly datasensorsService: DatasensorsService) {

  }

  @Get()
  findAll(): Promise<DatasensorsEntity[]> {
    return this.datasensorsService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.datasensorsService.findOne(params.id);
  }

  @Post()
  create(@Body() datasensors: DatasensorsEntity) {
    return this.datasensorsService.create(datasensors);
  }

  @Put()
  update(@Body() datasensors: DatasensorsEntity) {
    return this.datasensorsService.update(datasensors);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.datasensorsService.delete(params.id);
  }
}
