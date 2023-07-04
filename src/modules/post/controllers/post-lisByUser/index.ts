import postInMemoryRepository from '@modules/post/repositories/post-inMemory-repository';
import { PostListByUserService } from '@modules/post/services';
import { PostListByUserController } from './post-listByUser-controller';

const postListByUserService = new PostListByUserService(postInMemoryRepository);
const postListByUserController = new PostListByUserController(
  postListByUserService,
);

export { postListByUserController };
