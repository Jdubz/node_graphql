import Query from './query/Query'
import Message from './mutation/message'
import User from './mutation/user'

module.exports = {
  Query,
  Mutation: {
    ...User,
    ...Message,
  },
}