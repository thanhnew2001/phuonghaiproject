import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Transform } from 'class-transformer';
@Entity()
export class SensorsEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text') 
  Key: string;

  @Column('text')
 Measure: string;

  @Column()
  Status: boolean;

  @Column()
  Value: number;

  @Column()
  Devices_id: number;

}
