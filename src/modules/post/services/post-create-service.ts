import { PostCreateDTO } from "../dto/post-create-DTO";
import { Post } from "../entities/Post";
import { PostRepository } from "../repositories/post-repository";

export class PostCreateService {
  private readonly _postRepository: PostRepository;

  constructor(postRepository: PostRepository){
    this._postRepository = postRepository;
  }

  async execute(data: PostCreateDTO): Promise<Post> {
    const post = Post.create(data.authorId, data.title, data.content);
    await this._postRepository.save(post);
    return post;
  }
}
