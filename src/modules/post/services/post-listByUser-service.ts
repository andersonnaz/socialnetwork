import { Post } from '../entities/Post';
import { PostRepository } from '../repositories/post-repository';

export class PostListByUserService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(userId: string): Promise<Post[]> {
    const posts = await this._postRepository.listUserPosts(userId);
    return posts;
  }
}
