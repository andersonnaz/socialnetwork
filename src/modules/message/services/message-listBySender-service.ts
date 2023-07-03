import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/message-repository";

export class MessageListBySender {
  private readonly _messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository){
    this._messageRepository = messageRepository;
  }

  async execute(userId: string): Promise<Message[]> {
    const messages = await this._messageRepository.listBySender(userId);
    return messages;
  }
}
