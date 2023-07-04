import { UserCreateFriendshipService } from '@modules/user/services';
import { Request, Response } from 'express';

export class UserCreateFriendshipController {
  private readonly _userCreateFriendshipService: UserCreateFriendshipService;

  constructor(userCreateFriendshipService: UserCreateFriendshipService) {
    this._userCreateFriendshipService = userCreateFriendshipService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { userId } = request.params;
      const { friendId } = request.body;
      const result = await this._userCreateFriendshipService.execute(
        userId,
        friendId,
      );
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
