import { getRepository } from 'typeorm';
import User from './entity/User';
import Message from './entity/message';

const myResolvers = {
  Query: {
    async user(root, args, context, info) {
      const repository = getRepository(User);
      return await repository.findOne({ id: args.id });
    },
  },
  User: {
    async messages(user) {
      const repository = getRepository(Message);
      return await repository.find({ user_id: user.id });
    }
  }
};

module.exports = myResolvers;