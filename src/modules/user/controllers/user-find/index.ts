import userInMemoryRepository from "@modules/user/repositories/user-inMemory-repository";
import { UserFindService } from "@modules/user/services";
import { UserFindController } from "./user-find-controller";

const userFindService = new UserFindService(userInMemoryRepository);
const userFindController = new UserFindController(userFindService);

export { userFindController };
