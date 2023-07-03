import userInMemoryRepository from "@modules/user/repositories/user-inMemory-repository";
import { UserListService } from "@modules/user/services";
import { UserListController } from "./user-list-controller";

const userListService = new UserListService(userInMemoryRepository);
const userListController = new UserListController(userListService);

export { userListController };
