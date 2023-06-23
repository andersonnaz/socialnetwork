import { Comment } from "../../message/entities/Comment";
import { v4 as uuid } from "uuid";
export class Post {
  private readonly _id: string;
  private readonly _authorId: string;
  private readonly _title: string;
  private readonly _content: string;
  private readonly _date: Date;
  private _comments: Comment[];

  private constructor(authorId: string, title: string, content: string){
    this._id = this.generateId();
    this._authorId = authorId;
    this._title = title;
    this._content = content;
    this._date = new Date();
    this._comments = [];
  }

  private generateId(): string {
    return uuid();
  }

}