import { PostUpdateService } from "@modules/post/services";
import { Request, Response } from "express";

export class PostUpdateController {
  private readonly _postUpdateService: PostUpdateService;

  constructor(postUpdateService: PostUpdateService){
    this._postUpdateService = postUpdateService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const { title, content } = request.body;
      const result = await this._postUpdateService.execute(id, {title, content});
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
