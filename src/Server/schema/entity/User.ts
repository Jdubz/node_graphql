import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  username: string;

  @Column('text')
  email: string;
}