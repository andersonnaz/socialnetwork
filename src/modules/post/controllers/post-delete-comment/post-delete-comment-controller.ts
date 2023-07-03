import { PostDeleteCommentService } from "@modules/post/services";
import { Request, Response } from "express";

export class PostDeleteCommentController {
  private readonly _postDeleteCommentService: PostDeleteCommentService;

  constructor(postDeleteCommentService: PostDeleteCommentService){
    this._postDeleteCommentService = postDeleteCommentService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { postId } = request.params;
      const { commentId } = request.body;
      const result = await this._postDeleteCommentService.execute(postId, commentId);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
