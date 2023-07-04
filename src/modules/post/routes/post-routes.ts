import { Router } from 'express';
import {
  postAddCommentController,
  postCreateController,
  postDeleteCommentController,
  postDeleteController,
  postEditCommentController,
  postFindController,
  postListByUserController,
  postListController,
  postUpdateController,
} from '../controllers';

const postRouter = Router();

postRouter.get('/', postListController.execute);
postRouter.post('/', postCreateController.execute);
postRouter.delete('/:id', postDeleteController.execute);
postRouter.get('/:id', postFindController.execute);
postRouter.put('/:id', postUpdateController.execute);
postRouter.post('/comment/', postAddCommentController.execute);
postRouter.delete('/comment/:postId', postDeleteCommentController.execute);
postRouter.put('/comment/:postId', postEditCommentController.execute);
postRouter.get('/user/:userId', postListByUserController.execute);

export default postRouter;
