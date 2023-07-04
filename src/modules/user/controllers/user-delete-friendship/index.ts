import userInMemoryRepository from '@modules/user/repositories/user-inMemory-repository';
import { UserDeleteFriendshipService } from '@modules/user/services';
import { UserDeleteFriendshipController } from './user-delete-friendship-controller';

const userDeleteFriendshipService = new UserDeleteFriendshipService(
  userInMemoryRepository,
);
const userDeleteFriendshipController = new UserDeleteFriendshipController(
  userDeleteFriendshipService,
);

export { userDeleteFriendshipController };
