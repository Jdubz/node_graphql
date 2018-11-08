import { getConnection } from 'typeorm'
import User from '../../entity/User'
import Message from '../../entity/Message'
import { log } from '../../../utils/logger'

export default {
  async createMessage(root: any, args: any, context: any, info: any) {
    log.info(args);
    log.info(context);
  }
}