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

  private generateId(): string {
    return uuid();
  }
}
