import { Post } from '../entities/Post';
import { PostRepository } from '../repositories/post-repository';

export class PostFindService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(id: string): Promise<Post> {
    const post = await this._postRepository.findOne(id);
    return post as Post;
  }
}
