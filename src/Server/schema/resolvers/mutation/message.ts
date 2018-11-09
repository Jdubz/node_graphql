import { User } from '../../entity/User'
import { Message } from '../../entity/Message'
import { log } from '../../../utils/logger'

export default {
  async createMessage(root: any, args: any, context: any, info: any) {
    const newMessage = new Message(args);
    return await newMessage.save()
  }
}