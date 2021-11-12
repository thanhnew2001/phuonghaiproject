import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LabControllerService } from './lab-controller.service'
import { LabControllerEntity } from './lab-controller.entity'


@Controller('lab-controller')
export class LabControllerController {
  constructor(private readonly labControllerService: LabControllerService) {

  }

  @Get()
  findAll(): Promise<LabControllerEntity[]> {
    return this.labControllerService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.labControllerService.findOne(params.id);
  }

  @Post()
  create(@Body() labcontroller: LabControllerEntity) {
    return this.labControllerService.create(labcontroller);
  }

  @Put()
  update(@Body() labcontroller: LabControllerEntity) {
    return this.labControllerService.update(labcontroller);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.labControllerService.delete(params.id);
  }
}
