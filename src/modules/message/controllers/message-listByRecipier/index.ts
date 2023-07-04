import messageInMemoryRepository from '@modules/message/repositories/message-inMemory-repository';
import { MessageListByRecipierService } from '@modules/message/services';
import { MessageListByRecipierController } from './message-listByRecipier-controller';

const messageListByRecipierService = new MessageListByRecipierService(
  messageInMemoryRepository,
);
const messageListByRecipierController = new MessageListByRecipierController(
  messageListByRecipierService,
);

export { messageListByRecipierController };
