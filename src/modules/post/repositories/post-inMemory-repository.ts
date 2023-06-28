import { Comment } from "@modules/comment/entities/Comment";
import { Post } from "../entities/Post";
import { PostRepository } from "./post-repository";

export class PostInMemoryRepository implements PostRepository {
  private _posts: Post[] = [];

  save(param: Post): void {
    this._posts.push(param);
  }

  list(): Post[] {
    return this._posts;
  }

  listUserPosts(userId: string): Post[] {
    const filteredPostsByUser = this._posts.filter((post) => {
      return post.authorId === userId;
    })
    return filteredPostsByUser;
  }

  findOne(id: string): Post | undefined {

  }

  update(id: string, param: Partial<Post>): Post {

  }

  delete(id: string): void {

  }

  createComment(postId: string, authorId: string, content: string): void {

  }

  editComment(commentId: string, content: string): Comment {

  }

  deleteComment(commentId: string): void {

  }
}
