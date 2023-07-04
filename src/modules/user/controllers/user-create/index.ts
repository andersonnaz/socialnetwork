import userInMemoryRepository from '@modules/user/repositories/user-inMemory-repository';
import { UserCreateService } from '@modules/user/services';
import { UserCreateController } from './user-create-controller';

const userCreateService = new UserCreateService(userInMemoryRepository);
const userCreateController = new UserCreateController(userCreateService);

export { userCreateController };
