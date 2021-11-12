import { Module } from '@nestjs/common';
import { LabControllerService } from './lab-controller.service';
import { LabControllerController } from './lab-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabControllerEntity } from './lab-controller.entity';
@Module({
  imports: [TypeOrmModule.forFeature([LabControllerEntity])],
  providers: [LabControllerService],
  controllers: [LabControllerController],
})
export class LabControllerModule {}




