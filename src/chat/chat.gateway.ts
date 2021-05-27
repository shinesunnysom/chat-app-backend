import { MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway {
    @SubscribeMessage('message')
    handleEvent(@MessageBody() data: string): string {
        console.log(data);
      return data + ' Hello';
    }
}