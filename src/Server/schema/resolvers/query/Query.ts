import { getRepository } from 'typeorm';
import User from '../../entity/User';
import Message from '../../entity/Message';

export default {
  allUsers: (root, args, context, info) => {
      // console.log(args, context);
      return [1, 2, 3]
      // const repository = getRepository(User);
      // return await repository.findOne({ id: args.id });
  },
  User: (root, args, context, info) => {
    // console.log(root, args, context, info);
    return {
      id: 1,
      username: 'josh2',
      email: 'josh@josh.com'
    }
  }
  // {
  //   async messages(user: User) {
  //     const repository = getRepository(Message);
  //     return await repository.find({ user_id: user });
  //   }

};