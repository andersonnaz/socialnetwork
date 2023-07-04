import { UserRepository } from '../repositories/user-repository';

export class UserDeleteService {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async execute(id: string): Promise<void> {
    await this._userRepository.delete(id);
  }
}
