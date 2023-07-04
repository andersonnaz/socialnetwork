import { Post } from '../entities/Post';
import { PostRepository } from '../repositories/post-repository';

export class PostListService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(): Promise<Post[]> {
    const posts = await this._postRepository.list();
    return posts;
  }
}
