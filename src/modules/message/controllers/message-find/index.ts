import messageInMemoryRepository from "@modules/message/repositories/message-inMemory-repository";
import { MessageFindService } from "@modules/message/services";
import { MessageFindController } from "./message-find-controller";

const messageFindService = new MessageFindService(messageInMemoryRepository);
const messageFindController = new MessageFindController(messageFindService);

export { messageFindController };
