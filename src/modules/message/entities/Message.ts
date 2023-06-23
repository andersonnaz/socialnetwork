import { v4 as uuid } from "uuid";
export class Message {
  private readonly _id: string;
  private readonly _sender: string;
  private readonly _recipient: string;
  private readonly _content: string;
  private readonly _createdAt: Date;

  private constructor(sender: string, recipient: string, content: string){
    this._id = this.generateId();
    this._sender = sender;
    this._recipient = recipient;
    this._content = content;
    this._createdAt = new Date();
  }

  static validade(sender: string, recipient: string, content: string): boolean {
    if(!sender){
      throw new Error('sender user invalid!');
    }
    if(!recipient){
      throw new Error('recipient user invalid!');
    }
    if(!content){
      throw new Error('content invalid!');
    }
    return true;
  }

  private generateId(): string {
    return uuid();
  }
}
