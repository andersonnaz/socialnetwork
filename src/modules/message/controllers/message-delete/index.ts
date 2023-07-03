import messageInMemoryRepository from "@modules/message/repositories/message-inMemory-repository";
import { MessageDeleteService } from "@modules/message/services";
import { MessageDeleteController } from "./message-delete-controller";

const messageDeleteService = new MessageDeleteService(messageInMemoryRepository);
const messageDeleteController = new MessageDeleteController(messageDeleteService);

export { messageDeleteController };
