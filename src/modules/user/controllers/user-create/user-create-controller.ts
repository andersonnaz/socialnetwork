import { Request, Response } from "express";
import { UserCreateService } from "../../services";

export class UserCreateController {
  private readonly _userCreateService: UserCreateService;

  constructor(userCreateService: UserCreateService){
    this._userCreateService = userCreateService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { name, street, number, neighborhood, cpfNumber, userEmail, password } = request.body;
      const result = await this._userCreateService.execute({name, street, number, neighborhood, cpfNumber, userEmail, password});
      return response.status(201).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
