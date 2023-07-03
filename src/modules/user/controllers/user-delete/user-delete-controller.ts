import { UserDeleteService } from "@modules/user/services";
import { Request, Response } from "express";

export class UserDeleteController {
  private readonly _userDeleteService: UserDeleteService;

  constructor(userDeleteService: UserDeleteService){
    this._userDeleteService = userDeleteService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const result = await this._userDeleteService.execute(id);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
