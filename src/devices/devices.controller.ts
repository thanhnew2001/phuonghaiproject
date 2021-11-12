import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DevicesService } from './devices.service'
import { DevicesEntity } from './devices.entity'


@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {

  }

  @Get()
  findAll(): Promise<DevicesEntity[]> {
    return this.devicesService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.devicesService.findOne(params.id);
  }

  @Post()
  create(@Body() devices: DevicesEntity) {
    return this.devicesService.create(devices);
  }

  @Put()
  update(@Body() devices: DevicesEntity) {
    return this.devicesService.update(devices);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.devicesService.delete(params.id);
  }
}
