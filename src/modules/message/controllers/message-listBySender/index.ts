import messageInMemoryRepository from '@modules/message/repositories/message-inMemory-repository';
import { MessageListBySenderService } from '@modules/message/services';
import { MessageListBySenderController } from './message-listBySender-controller';

const messageListBySenderService = new MessageListBySenderService(
  messageInMemoryRepository,
);
const messageListBySenderController = new MessageListBySenderController(
  messageListBySenderService,
);

export { messageListBySenderController };
