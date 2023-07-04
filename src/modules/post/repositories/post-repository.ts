import { Save } from '@shared/database/repository/Save';
import { Post } from '../entities/Post';
import { Delete } from '@shared/database/repository/Delete';
import { List } from '@shared/database/repository/List';
import { Update } from '@shared/database/repository/Update';
import { FindOne } from '@shared/database/repository/FindOne';
import { Comment } from '@modules/comment/entities/Comment';

export interface PostRepository
  extends Save<Post>,
    Delete,
    List<Post>,
    Update<Post>,
    FindOne<Post> {
  listUserPosts(userId: string): Post[];
  createComment(postId: string, authorId: string, content: string): void;
  editComment(postId: string, commentId: string, content: string): Comment;
  deleteComment(postId: string, commentId: string): void;
}
