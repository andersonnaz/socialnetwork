import { Save } from "@shared/database/repository/Save";
import { Message } from "../entities/Message";
import { FindOne } from "@shared/database/repository/FindOne";
import { Delete } from "@shared/database/repository/Delete";

export interface MessageRepository extends
  Save<Message>,
  FindOne<Message>,
  Delete{

  listBySender(userId: string): Message[];
  listByRecipier(userId: string): Message[];
}
