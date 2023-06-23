import { v4 as uuid } from 'uuid';
export class Comment {
  private readonly _id: string;
  private readonly _postId: string;
  private readonly _authorId: string;
  private readonly _createdAt: Date;
  private _content: string;

  private constructor(postId: string, authorId: string, content: string){
    this._id = this.generateId();
    this._postId = postId;
    this._authorId = authorId;
    this._createdAt = new Date();
    this._content = content;
  }

  static create(postId: string, authorId: string, content: string): Comment {
    this.validate(postId, authorId, content);
    return new Comment(postId, authorId, content);
  }

  static validate(postId: string, authorId: string, content: string): boolean {
    if(!postId){
      throw new Error('post id invalid!');
    }
    if(!authorId){
      throw new Error('author id invalid!');
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

  get postId(): string {
    return this._postId;
  }

  get authorId(): string {
    return this._authorId;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get content(): string {
    return this._content;
  }

  set content(newContent: string) {
    this._content = newContent;
  }
}
