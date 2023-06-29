import { Comment } from "../../comment/entities/Comment";
import { v4 as uuid } from "uuid";
export class Post {
  private readonly _id: string;
  private readonly _authorId: string;
  private readonly _date: Date;
  private _title: string;
  private _content: string;
  private _comments: Comment[];

  private constructor(authorId: string, title: string, content: string){
    this._id = this.generateId();
    this._authorId = authorId;
    this._title = title;
    this._content = content;
    this._date = new Date();
    this._comments = [];
  }

  static create(authorId: string, title: string, content: string): Post {
    this.validate(authorId, title, content);
    return new Post(authorId, title, content);
  }

  static validate(authorId: string, title: string, content: string): boolean {
    if(!authorId){
      throw new Error('author invalid!');
    }
    if(!title){
      throw new Error('title invalid!');
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

  get authorId(): string {
    return this._authorId;
  }

  get date(): Date {
    return this._date;
  }

  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  set title(newTitle: string){
    this._title = newTitle;
  }

  set content(newContent: string){
    this._content = newContent;
  }

  set comments(comments: Comment[]) {
    this._comments = comments;
  }

  addComent(comment: Comment){
    this._comments.push(comment);
  }
}
