import { v4 as uuid } from "uuid";
export class Message {
  private readonly _id: string;
  private readonly _from: string;
  private readonly _to: string;
  private readonly _content: string;
  private readonly _createdAt: Date;

  private constructor(from: string, to: string, content: string){
    this._id = this.generateId();
    this._from = from;
    this._to = to;
    this._content = content;
    this._createdAt = new Date();
  }

  private generateId(): string {
    return uuid();
  }
}
