import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/message-repository";

export class MessageFindService {
  private readonly _MessageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository){
    this._MessageRepository = messageRepository;
  }

  async execute(id: string): Promise<Message> {
    const message = await this._MessageRepository.findOne(id);
    return message as Message;
  }
}
