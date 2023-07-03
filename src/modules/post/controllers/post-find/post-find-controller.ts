import { PostFindService } from "@modules/post/services";
import { Request, Response } from "express";

export class PostFindController {
  private readonly _postFindService: PostFindService;

  constructor(postFindService: PostFindService){
    this._postFindService = postFindService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const result = await this._postFindService.execute(id);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
