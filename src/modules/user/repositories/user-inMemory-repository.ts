import { User } from "../entities/User";
import { UserRepository } from "./user-repository";

type Tuple = [user: string, friends: string[]];

class UserInMemoryRepository implements UserRepository{
  private _database: User[] = [];
  private _friendship: Tuple[] = [];

  save(param: User): void {
    this._database.push(param);
  }

  list(): User[] {
    return this._database;
  }

  delete(id: string): void {

  }

  update(id: string, param: Partial<User>): User {

  }

  findOne(id: string): User {

  }

  createFriendship(): void {

  }

  deleteFriendship(): void {

  }
}

export default new UserInMemoryRepository();
