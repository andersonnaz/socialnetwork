import userInMemoryRepository from '@modules/user/repositories/user-inMemory-repository';
import { UserCreateFriendshipService } from '@modules/user/services';
import { UserCreateFriendshipController } from './user-create-friendship-controller';

const userCreateFriendshipService = new UserCreateFriendshipService(
  userInMemoryRepository,
);
const userCreateFriendshipController = new UserCreateFriendshipController(
  userCreateFriendshipService,
);

export { userCreateFriendshipController };
