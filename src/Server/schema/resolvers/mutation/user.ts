import { getConnection } from 'typeorm'
import { User } from '../../entity/User'
import { log } from '../../../utils/logger'

export default {
  async createUser(root: any, args: any, context: any, info: any) {
    const newUser = new User(args);
    return await newUser.save();
  }
}