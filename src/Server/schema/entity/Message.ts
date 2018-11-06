import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import User from './User';

@Entity()
export default class Message {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column("text")
  message: string;

  @ManyToOne(type => User)
  user_id: User;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}