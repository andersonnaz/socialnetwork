import { User } from "../entities/User";
import { UserRepository, Tuple } from "./user-repository";

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

  createFriendship(userId: string, friendId: string): Tuple[] {
    const user = this.findOne(userId);
    if(!user){
      throw new Error('user not found!');
    }
    const findedUser = this._friendship.find((user) => {
      return user[0] === userId;
    })
    if(!findedUser){
      this._friendship.push([userId, [friendId]]);
      return this._friendship;
    }
    findedUser[1].push(friendId);
    return this._friendship;
  }

  deleteFriendship(userId: string, friendId: string): void {
    const user = this.findOne(userId);
    if(!user){
      throw new Error('user not found!');
    }
    const findedUser = this._friendship.find((user) => {
      return user[0] === userId;
    })
    if(!findedUser){
      throw new Error('user not found!');
    }
    const filteredFriendship = findedUser[1].filter((friend) => {
      return friend !== friendId;
    })
    findedUser[1] = filteredFriendship;
  }
}

export default new UserInMemoryRepository();
