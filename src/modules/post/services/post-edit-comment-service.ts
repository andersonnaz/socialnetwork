import { Comment } from '@modules/comment/entities/Comment';
import { PostRepository } from '../repositories/post-repository';

export class PostEditCommentService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(
    postId: string,
    commentId: string,
    content: string,
  ): Promise<Comment> {
    const comment = await this._postRepository.editComment(
      postId,
      commentId,
      content,
    );
    return comment;
  }
}
