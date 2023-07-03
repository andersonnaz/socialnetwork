import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/message-repository";

export class MessageCreateService {
  private readonly _messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository){
    this._messageRepository = messageRepository;
  }

  async execute(sender: string, recipier: string, content: string): Promise<Message> {
    const message = Message.create(sender, recipier, content);
    await this._messageRepository.save(message);
    return message;
  }
}
