import { PostRepository } from '../repositories/post-repository';

export class PostDeleteService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(id: string): Promise<void> {
    await this._postRepository.delete(id);
  }
}
