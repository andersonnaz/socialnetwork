import { Message } from "../entities/Message";
import { MessageRepository } from "./message-repository";

class MessageInMemoryRepository implements MessageRepository {
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

  delete(id: string): void {
    const message = this.findOne(id);
    if(!message){
      throw new Error('message not found!');
    }
    const filteredDatabase = this._database.filter((message) => {
      return message.id !== id;
    })
    this._database = filteredDatabase;
  }

  listBySender(userId: string): Message[] {
    const messages = this._database.filter((message) => {
      return message.sender === userId;
    })
    return messages;
  }

  listByRecipier(userId: string): Message[] {
    const messages = this._database.filter((message) => {
      return message.recipier === userId;
    })
    return messages;
  }
}

export default new MessageInMemoryRepository();
