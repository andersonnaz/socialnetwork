import { Tuple, UserRepository } from "../repositories/user-repository";

export class UserCreateFriendshipService {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this._userRepository = userRepository;
  }

  async execute(userId: string, friendId: string): Promise<Tuple[]> {
    const friendships = await this._userRepository.createFriendship(userId, friendId);
    return friendships;
  }
}
