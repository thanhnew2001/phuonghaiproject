import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SensorsService } from './sensors.service'
import { SensorsEntity } from './sensors.entity'


@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {

  }

  @Get()
  findAll(): Promise<SensorsEntity[]> {
    return this.sensorsService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.sensorsService.findOne(params.id);
  }

  @Post()
  create(@Body() sensors: SensorsEntity) {
    return this.sensorsService.create(sensors);
  }

  @Put()
  update(@Body() sensors: SensorsEntity) {
    return this.sensorsService.update(sensors);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.sensorsService.delete(params.id);
  }
}

