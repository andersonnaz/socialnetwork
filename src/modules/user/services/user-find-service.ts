import { User } from '../entities/User';
import { UserRepository } from '../repositories/user-repository';

export class UserFindService {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async execute(id: string): Promise<User> {
    const user = await this._userRepository.findOne(id);
    return user as User;
  }
}
