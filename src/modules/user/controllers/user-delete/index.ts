import userInMemoryRepository from "@modules/user/repositories/user-inMemory-repository";
import { UserDeleteService } from "@modules/user/services";
import { UserDeleteController } from "./user-delete-controller";

const userDeleteService = new UserDeleteService(userInMemoryRepository);
const userDeleteController = new UserDeleteController(userDeleteService);

export { userDeleteController };
