import { Message } from '../entities/Message';
import { MessageRepository } from '../repositories/message-repository';

export class MessageListByRecipierService {
  private readonly _messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this._messageRepository = messageRepository;
  }

  async execute(userId: string): Promise<Message[]> {
    const messages = await this._messageRepository.listByRecipier(userId);
    return messages;
  }
}
