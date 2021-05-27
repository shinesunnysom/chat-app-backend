import { MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway {
    @SubscribeMessage('chats')
    handleEvent(@MessageBody() data: string): string {
      return data + ' Hello ';
    }
}