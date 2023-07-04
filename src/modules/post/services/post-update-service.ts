import { PostUpdateDTO } from '../dto/post-update-DTO';
import { Post } from '../entities/Post';
import { PostRepository } from '../repositories/post-repository';

export class PostUpdateService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this._postRepository = postRepository;
  }

  async execute(id: string, postUpdate: PostUpdateDTO): Promise<Post> {
    const post = await this._postRepository.update(id, postUpdate);
    return post;
  }
}
