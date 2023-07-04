import { PostListService } from '@modules/post/services';
import { Request, Response } from 'express';

export class PostListController {
  private readonly _postListService: PostListService;

  constructor(postListService: PostListService) {
    this._postListService = postListService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const result = await this._postListService.execute();
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
