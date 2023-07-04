import { PostDeleteService } from '@modules/post/services';
import { Request, Response } from 'express';

export class PostDeleteController {
  private readonly _postDeleteService: PostDeleteService;

  constructor(postDeleteService: PostDeleteService) {
    this._postDeleteService = postDeleteService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const result = await this._postDeleteService.execute(id);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
