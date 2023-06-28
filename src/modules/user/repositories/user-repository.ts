import { Delete } from "@shared/database/repository/Delete";
import { FindOne } from "@shared/database/repository/FindOne";
import { List } from "@shared/database/repository/List";
import { Save } from "@shared/database/repository/Save";
import { Update } from "@shared/database/repository/Update";
import { User } from "../entities/User";

export type Tuple = [user: string, friends: string[]];

export interface UserRepository extends
  Save<User>,
  Delete,
  List<User>,
  Update<User>,
  FindOne<User>{

  createFriendship(userId: string, friendId: string): Tuple[];
  deleteFriendship(userId: string, friendId: string): void;
}

