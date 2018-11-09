import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, BaseEntity } from 'typeorm';
import { User } from './User';

@Entity()
export class Message extends BaseEntity {

  constructor(msg) {
    super();
    Object.assign(this, msg);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  message: string;

  @ManyToOne(type => User)
  user_id: User;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: number;
}
