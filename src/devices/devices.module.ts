import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesEntity } from './devices.entity';
@Module({
  imports: [TypeOrmModule.forFeature([DevicesEntity])],
  providers: [DevicesService],
  controllers: [DevicesController],
})
export class DevicesModule {}








