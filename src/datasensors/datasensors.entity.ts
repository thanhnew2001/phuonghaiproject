import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Transform } from 'class-transformer';
@Entity()
export class DatasensorsEntity{
  @PrimaryGeneratedColumn()
  id: number;

//   @Transform(x => new Date('dd/mm/YYYY'))
//   @Column('text')
//   date: Date;

  @Column({ type: 'date' })
  ReceivedDate: string;


  @Column() 
  Value: number;
 
  @Column()
  Sensors_id: number;

  
}

