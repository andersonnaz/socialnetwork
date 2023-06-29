import { UserUpdateDTO } from "../dto/user-update-DTO";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/user-repository";

export class UserUpdateService {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this._userRepository = userRepository;
  }

  async execute(id: string, userUpdate: UserUpdateDTO): Promise<User> {
    const user = await this._userRepository.update(id, userUpdate);
    return user;
  }
}
