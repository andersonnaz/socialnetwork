import { UserRepository } from "../repositories/user-repository";

export class UserDeleteFriendshipService {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this._userRepository = userRepository;
  }

  async execute(userId: string, friendId: string): Promise<void> {
    await this._userRepository.deleteFriendship(userId, friendId);
  }
}
