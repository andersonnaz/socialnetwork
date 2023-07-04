import { UserUpdateService } from '@modules/user/services';
import { Request, Response } from 'express';

export class UserUpdateController {
  private readonly _userUpdateService: UserUpdateService;

  constructor(userUpdateService: UserUpdateService) {
    this._userUpdateService = userUpdateService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const { name, password } = request.body;
      const result = await this._userUpdateService.execute(id, {
        name,
        password,
      });
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
