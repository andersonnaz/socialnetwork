import { UserCreateDTO } from "../dto/user-create-DTO";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/user-repository";

export class UserCreateService {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this._userRepository = userRepository;
  }

  async execute(data: UserCreateDTO): Promise<User> {
    const user = User.create(data.name, data.street, data.number, data.neighborhood, data.cpfNumber, data.userEmail, data.password);
    await this._userRepository.save(user);
    return user;
  }
}
