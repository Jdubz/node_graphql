import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Message } from './Message';

@Entity()
export class User extends BaseEntity {

  constructor(user: {
    username: string,
    email?: string,
  }) {
    super();
    Object.assign(this, user);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  username: string;

  @Column('text')
  email: string;

  @OneToMany(type => Message, message => Message.user)
  messages: Message[];
}
