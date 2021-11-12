import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Transform } from 'class-transformer';
@Entity()
export class DevicesEntity{
  @PrimaryGeneratedColumn()
  id: number;

//   @Transform(x => new Date('dd/mm/YYYY'))
//   @Column('text')
//   date: Date;

  @Column({ length: 500 }) 
  Description: string;

  @Column('text')
  FriendlyName: string;

  @Column('text')
  Model: string;

  @Column('text')
  SerialNumber: string;

  @Column('text')
  Sensors: string;

  @Column('text')
  Type: string;

  @Column()
  LabController_id: number;

  @Column()
  isActive: boolean;
}
