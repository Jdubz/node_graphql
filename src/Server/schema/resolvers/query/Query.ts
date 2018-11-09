import { getConnection, getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { Message } from '../../entity/Message';
import { log } from '../../../utils/logger'

export default {
  user: (root: any, args: any, context: any, info: any) => {
    return getRepository(User).findOne(args.id);
  },
  messages: (root, args, context, info) => {
    console.log(args)
    return getRepository(Message).find();
  }
};