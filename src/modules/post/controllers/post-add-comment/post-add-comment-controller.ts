import { PostAddCommentService } from '@modules/post/services';
import { Request, Response } from 'express';

export class PostAddCommentController {
  private readonly _postAddCommentService: PostAddCommentService;

  constructor(postAddCommentService: PostAddCommentService) {
    this._postAddCommentService = postAddCommentService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { postId, authorId, content } = request.body;
      const result = await this._postAddCommentService.execute(
        postId,
        authorId,
        content,
      );
      return response.status(201).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
