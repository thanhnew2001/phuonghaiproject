import { Module } from '@nestjs/common';
import { DatasensorsService } from './datasensors.service';
import { DatasensorsController } from './datasensors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasensorsEntity } from './datasensors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatasensorsEntity])],
  providers: [DatasensorsService],
  controllers: [DatasensorsController]
})
export class DatasensorsModule {}
