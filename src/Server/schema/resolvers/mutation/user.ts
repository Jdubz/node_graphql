import { getConnection } from 'typeorm'
import User from '../../entity/User'
import { log } from '../../../utils/logger'

export default {
  async createUser(root: any, args: any, context: any, info: any) {
    log.info(args);
    log.info(context);
    return 'bleep'
  }
}