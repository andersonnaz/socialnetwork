import { v4 as uuid } from "uuid";
export class Message {
  private readonly _id: string;
  private readonly _sender: string;
  private readonly _recipier: string;
  private readonly _content: string;
  private readonly _createdAt: Date;

  private constructor(sender: string, recipier: string, content: string){
    this._id = this.generateId();
    this._sender = sender;
    this._recipier = recipier;
    this._content = content;
    this._createdAt = new Date();
  }

  static create(sender: string, recipier: string, content: string): Message {
    this.validade(sender, recipier, content);
    return new Message(sender, recipier, content);
  }

  static validade(sender: string, recipier: string, content: string): boolean {
    if(!sender){
      throw new Error('sender user invalid!');
    }
    if(!recipier){
      throw new Error('recipier user invalid!');
    }
    if(!content){
      throw new Error('content invalid!');
    }
    return true;
  }

  private generateId(): string {
    return uuid();
  }

  get id(): string {
    return this._id;
  }

  get sender(): string {
    return this._sender;
  }

  get recipier(): string {
    return this._recipier;
  }

  get content(): string {
    return this._content;
  }

  get createAt(): Date {
    return this._createdAt;
  }
}
