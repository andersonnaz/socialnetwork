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
    this._createdAt = new Date;
    this._content = content;
  }

  private generateId(): string {
    return uuid();
  }
}
