import { Message } from "../entities/Message";
import { MessageRepository } from "./message-repository";

export class MessageInMemoryRepository implements MessageRepository {
  private _database: Message[] = [];

  save(param: Message): void {
    this._database.push(param);
  }

  findOne(id: string): Message | undefined {
    const message = this._database.find((message) => {
      return message.id === id;
    })
    if(!message){
      throw new Error('message not found!');
    }
    return message;
  }

  update(id: string, param: Partial<Message>): Message {

  }

  delete(id: string): void {

  }

  listBySender(userId: string): Message[] {

  }

  listByRecipier(userId: string): Message[] {

  }
}
