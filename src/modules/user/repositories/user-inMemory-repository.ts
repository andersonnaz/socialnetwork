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
    const databaseFiltered = this._database.filter((user) => {
      return user.id !== id;
    })
    this._database = databaseFiltered;
  }

  update(id: string, param: Partial<User>): User {
    const user = this.findOne(id);
    if(!user){
      throw new Error('user not found!');
    }
    Object.assign(user, param);
    return user;
  }

  findOne(id: string): User | undefined{
    const user = this._database.find((user) => {
      return user.id === id;
    })
    if(!user){
      throw new Error('user not found!');
    }
    return user;
  }

  createFriendship(): void {

  }

  deleteFriendship(): void {

  }
}

export default new UserInMemoryRepository();
