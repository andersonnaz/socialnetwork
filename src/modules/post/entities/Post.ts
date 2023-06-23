import { Comment } from "../../message/entities/Comment";
export class Post {
  private readonly _id: string;
  private readonly _authorId: string;
  private readonly _title: string;
  private readonly _content: string;
  private readonly _date: Date;
  private _comments: Comment[];

  private constructor(authorId: string, title: string, content: string){
    this._authorId = authorId;
    this._title = title;
    this._content = content;
    this._date = new Date();
    this._comments = [];
  }

}
