import { MessageListByRecipierService } from '@modules/message/services';
import { Request, Response } from 'express';

export class MessageListByRecipierController {
  private readonly _messageListByRecipierService: MessageListByRecipierService;

  constructor(messageListByRecipierService: MessageListByRecipierService) {
    this._messageListByRecipierService = messageListByRecipierService;
  }

  execute = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { userId } = request.params;
      const result = await this._messageListByRecipierService.execute(userId);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}
