import { MessageDeleteService } from "@modules/message/services";
import { Request, Response } from "express";

export class MessageDeleteController {
  private readonly _messageDeleteService: MessageDeleteService;

  constructor(messageDeleteService: MessageDeleteService){
    this._messageDeleteService = messageDeleteService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const result = await this._messageDeleteService.execute(id);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
