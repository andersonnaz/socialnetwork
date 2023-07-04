import { PostEditCommentService } from '@modules/post/services';
import { Request, Response } from 'express';

export class PostEditCommentController {
  private readonly _postEditCommentService: PostEditCommentService;

  constructor(postEditCommentService: PostEditCommentService) {
    this._postEditCommentService = postEditCommentService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { postId } = request.params;
      const { commentId, content } = request.body;
      const result = await this._postEditCommentService.execute(
        postId,
        commentId,
        content,
      );
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
