import { User } from '../entities/User';
import { UserRepository } from '../repositories/user-repository';

export class UserListService {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    const users = await this._userRepository.list();
    return users;
  }
}
