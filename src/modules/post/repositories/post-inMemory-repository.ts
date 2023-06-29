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
    const findedPost = this._posts.find((post) => {
      return post.id === id;
    })
    if(!findedPost){
      throw new Error('post not found!');
    }
    return findedPost;
  }

  update(id: string, param: Partial<Post>): Post {
    const post = this.findOne(id);
    if(!post){
      throw new Error('post not found!');
    }
    Object.assign(post, param);
    return post;
  }

  delete(id: string): void {
    const post = this.findOne(id);
    if(!post){
      throw new Error('post not found!');
    }
    const postsFiltered = this._posts.filter((post) => {
      return post.id !== id;
    })
    this._posts = postsFiltered;
  }

  createComment(postId: string, authorId: string, content: string): void {

  }

  editComment(commentId: string, content: string): Comment {

  }

  deleteComment(commentId: string): void {

  }
}
