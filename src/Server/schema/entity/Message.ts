import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, BaseEntity, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Message extends BaseEntity {

  constructor(msg: {
    message: string
  }) {
    super();
    Object.assign(this, msg);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  message: string;

  @ManyToOne(type => User, user => user.messages)
  user: User;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}
