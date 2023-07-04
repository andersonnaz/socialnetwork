import postInMemoryRepository from '@modules/post/repositories/post-inMemory-repository';
import { PostCreateService } from '@modules/post/services';
import { PostCreateController } from './post-create-controller';

const postCreateService = new PostCreateService(postInMemoryRepository);
const postCreateController = new PostCreateController(postCreateService);

export { postCreateController };
