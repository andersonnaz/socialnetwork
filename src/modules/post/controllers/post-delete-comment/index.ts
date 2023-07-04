import postInMemoryRepository from '@modules/post/repositories/post-inMemory-repository';
import { PostDeleteCommentService } from '@modules/post/services';
import { PostDeleteCommentController } from './post-delete-comment-controller';

const postDeleteCommentService = new PostDeleteCommentService(
  postInMemoryRepository,
);
const postDeleteCommentController = new PostDeleteCommentController(
  postDeleteCommentService,
);

export { postDeleteCommentController };
