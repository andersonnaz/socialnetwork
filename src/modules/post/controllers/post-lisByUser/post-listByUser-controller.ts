import { PostListByUserService } from "@modules/post/services";
import { Request, Response } from "express";

export class PostListByUserController {
  private readonly _postListByUserService: PostListByUserService;

  constructor(postListByUserService: PostListByUserService){
    this._postListByUserService = postListByUserService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { userId } = request.params;
      const result = await this._postListByUserService.execute(userId);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
