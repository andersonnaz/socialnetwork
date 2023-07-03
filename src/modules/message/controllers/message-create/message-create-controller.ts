import { MessageCreateService } from "@modules/message/services";
import { Request, Response } from "express";

export class MessageCreateController {
  private readonly _messageCreateService: MessageCreateService;

  constructor(messageCreateService: MessageCreateService){
    this._messageCreateService = messageCreateService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { sender, recipier, content } = request.body;
      const result = await this._messageCreateService.execute(sender, recipier, content);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
