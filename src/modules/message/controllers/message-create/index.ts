import messageInMemoryRepository from "@modules/message/repositories/message-inMemory-repository";
import { MessageCreateService } from "@modules/message/services";
import { MessageCreateController } from "./message-create-controller";

const messageCreateService = new MessageCreateService(messageInMemoryRepository);
const messageCreateController = new MessageCreateController(messageCreateService);

export { messageCreateController };
