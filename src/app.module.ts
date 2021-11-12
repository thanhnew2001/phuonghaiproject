import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabControllerModule } from './lab-controller/lab-controller.module';
import { DevicesModule } from './devices/devices.module';
import { SensorsModule } from './sensors/sensors.module';
import { DatasensorsModule } from './datasensors/datasensors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'phuonghai',
      password: 'phuonghai',
      database: 'phuonghai',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), 
    LabControllerModule, DevicesModule, SensorsModule, DatasensorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


