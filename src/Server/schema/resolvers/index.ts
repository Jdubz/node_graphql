import Query from './query/Query'
import Message from './mutation/message'
import User from './mutation/user'

export default {
  Query,
  Mutation: {
    ...User,
    ...Message,
  },
}