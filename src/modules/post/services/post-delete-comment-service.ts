import { PostRepository } from '../repositories/post-repository';

export class PostDeleteCommentService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(postId: string, commentId: string): Promise<void> {
    await this._postRepository.deleteComment(postId, commentId);
  }
}
