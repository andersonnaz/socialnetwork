import { Router } from "express";
import {
  messageCreateController,
  messageDeleteController,
  messageFindController,
  messageListByRecipierController,
  messageListBySenderController
} from "../controllers";

const messageRouter = Router();

messageRouter.get('/recipier/:userId', messageListByRecipierController.execute);
messageRouter.get('/sender/:userId', messageListBySenderController.execute);
messageRouter.get('/:id', messageFindController.execute);
messageRouter.post('/', messageCreateController.execute);
messageRouter.delete('/:id', messageDeleteController.execute);

export default messageRouter;
