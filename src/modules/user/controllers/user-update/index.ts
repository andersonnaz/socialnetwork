import userInMemoryRepository from '@modules/user/repositories/user-inMemory-repository';
import { UserUpdateService } from '@modules/user/services';
import { UserUpdateController } from './user-update-controller';

const userUpdateService = new UserUpdateService(userInMemoryRepository);
const userUpdateController = new UserUpdateController(userUpdateService);

export { userUpdateController };
