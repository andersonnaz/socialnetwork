import { Comment } from "@modules/comment/entities/Comment";
import { Post } from "../entities/Post";
import { PostRepository } from "./post-repository";

export class PostInMemoryRepository implements PostRepository {
  private _posts: Post[] = [];

  save(param: Post): void {

  }

  list(): Post[] {

  }

  listUserPosts(userId: string): Post[] {

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
