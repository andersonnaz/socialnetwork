import { MessageRepository } from '../repositories/message-repository';

export class MessageDeleteService {
  private readonly _messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this._messageRepository = messageRepository;
  }

  async execute(id: string): Promise<void> {
    await this._messageRepository.delete(id);
  }
}
