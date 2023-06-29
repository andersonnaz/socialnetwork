import { Save } from "@shared/database/repository/Save";
import { Message } from "../entities/Message";
import { FindOne } from "@shared/database/repository/FindOne";
import { Update } from "@shared/database/repository/Update";
import { Delete } from "@shared/database/repository/Delete";
import { List } from "@shared/database/repository/List";

export interface MessageRepository extends
  Save<Message>,
  FindOne<Message>,
  Update<Message>,
  Delete{

  listBySender(userId: string): Message[];
  listByRecipier(userId: string): Message[];
}
