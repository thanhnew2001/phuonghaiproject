import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LabControllerEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 }) 
  Description: string;

  @Column('text')
  Devices: string;

  @Column('text')
  FriendlyName: string;

  @Column('text')
  Model: string;

  @Column('text')
  SerialNumber: string;

  @Column('text')
  Type: string;

  @Column()
  isActive: boolean;
}