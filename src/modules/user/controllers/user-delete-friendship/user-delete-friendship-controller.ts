import { UserDeleteFriendshipService } from '@modules/user/services';
import { Request, Response } from 'express';

export class UserDeleteFriendshipController {
  private readonly _userDeleteFriendshipService: UserDeleteFriendshipService;

  constructor(userDeleteFriendshipService: UserDeleteFriendshipService) {
    this._userDeleteFriendshipService = userDeleteFriendshipService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { userId } = request.params;
      const { friendId } = request.body;
      const result = await this._userDeleteFriendshipService.execute(
        userId,
        friendId,
      );
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
