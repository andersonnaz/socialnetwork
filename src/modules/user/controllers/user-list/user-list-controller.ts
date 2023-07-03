import { UserListService } from "@modules/user/services";
import { Request, Response } from "express";

export class UserListController {
  private readonly _userListService: UserListService;

  constructor(userListService: UserListService){
    this._userListService = userListService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const result = await this._userListService.execute();
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
