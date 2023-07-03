import { UserFindService } from "@modules/user/services";
import { Request, Response } from "express";

export class UserFindController {
  private readonly _userFindService: UserFindService;

  constructor(userFindService: UserFindService){
    this._userFindService = userFindService;
  }

  execute = async(request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const result = await this._userFindService.execute(id);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
