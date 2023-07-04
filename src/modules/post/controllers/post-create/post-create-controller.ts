import { PostCreateService } from '@modules/post/services';
import { Request, Response } from 'express';

export class PostCreateController {
  private readonly _postCreateService: PostCreateService;

  constructor(postCreateService: PostCreateService) {
    this._postCreateService = postCreateService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { authorId, title, content } = request.body;
      const result = await this._postCreateService.execute({
        authorId,
        title,
        content,
      });
      return response.status(201).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
