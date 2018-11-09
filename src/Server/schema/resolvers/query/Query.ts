import { getConnection } from 'typeorm';
import { User } from '../../entity/User';
import { Message } from '../../entity/Message';
import { log } from '../../../utils/logger'

export default {
  User: (root, args, context, info) => {
    // console.log(root, args, context, info);
    return {
      id: 1,
      username: 'josh2',
      email: 'josh@josh.com'
    }
  }

};