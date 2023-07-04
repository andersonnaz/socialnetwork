import { PostRepository } from '../repositories/post-repository';

export class PostAddCommentService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(
    postId: string,
    authorId: string,
    content: string,
  ): Promise<void> {
    await this._postRepository.createComment(postId, authorId, content);
  }
}
