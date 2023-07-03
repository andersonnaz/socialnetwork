import { Router } from "express";
import {
  userCreateController,
  userCreateFriendshipController,
  userDeleteController,
  userDeleteFriendshipController,
  userFindController,
  userListController,
  userUpdateController
} from "../controllers";

const userRouter = Router();

userRouter.get('/', userListController.execute);
userRouter.post('/', userCreateController.execute);
userRouter.delete('/:id', userDeleteController.execute);
userRouter.get('/:id', userFindController.execute);
userRouter.put('/:id', userUpdateController.execute);
userRouter.post('/friendship/', userCreateFriendshipController.execute);
userRouter.delete('/friendship/', userDeleteFriendshipController.execute);

export default userRouter;
