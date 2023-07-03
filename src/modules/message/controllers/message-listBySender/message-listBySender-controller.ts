import { MessageListBySenderService } from "@modules/message/services";
import { Request, Response } from "express";

export class MessageListBySenderController {
  private readonly _messageListBySenderService: MessageListBySenderService;

  constructor(messageListBySenderService: MessageListBySenderService){
    this._messageListBySenderService = messageListBySenderService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { userId } = request.params;
      const result = await this._messageListBySenderService.execute(userId);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
