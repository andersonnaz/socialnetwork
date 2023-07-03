import { MessageFindService } from "@modules/message/services";
import { Request, Response } from "express";

export class MessageFindController {
  private readonly _messageFindService: MessageFindService;

  constructor(messageFindService: MessageFindService){
    this._messageFindService = messageFindService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const result = await this._messageFindService.execute(id);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
