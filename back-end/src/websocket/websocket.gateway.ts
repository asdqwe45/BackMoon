import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody } from '@nestjs/websockets';
import { subscribe } from 'diagnostics_channel';
import { subscribeOn } from 'rxjs';
import { Server,WebSocket } from 'ws';
import * as zlib from 'zlib';
@WebSocketGateway(6001)
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: WebSocket) {
    console.log(`Client connected!: ${client.id}`);
  }

  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected!: ${client.id}`);
  }

  @SubscribeMessage('video')
  handleVideo(client: WebSocket, @MessageBody() data: any): void {
    // 영상 데이터를 다른 클라이언트에게 브로드캐스트
    const buffer = Buffer.from(data, 'base64');
    // const buffer = zlib.inflateSync(compressedBuffer);

    this.server.clients.forEach((client) => {
      if(client.readyState === WebSocket.OPEN){
        client.send(buffer);
      }
    });
  }


  @SubscribeMessage('command')
  handleMessage(client: WebSocket, @MessageBody() payload: any): void {
    try {
      //console.log(JSON.parse(payload));
      const key = payload;
      console.log(`Received key from client: ${key}`);
      // 메시지 처리 로직을 추가합니다.
    } catch (error) {
      console.error('Error handling message:', error);
      // 오류 처리 로직을 추가합니다.
    }
    this.server.clients.forEach((client) => {
      if(client.readyState === WebSocket.OPEN){
        client.send(payload);
      }
    });
  }

}
// import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
// import { Server, WebSocket } from 'ws';

// @WebSocketGateway(6001)
// export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer() server: Server;

//   handleConnection(client: WebSocket) {
//     console.log(`Client connected: ${client}`);
//   }

//   handleDisconnect(client: WebSocket) {
//     console.log(`Client disconnected: ${client}`);
//   }

//   @SubscribeMessage('video')
//   handleVideo(client: WebSocket, @MessageBody() data: ArrayBuffer): void {
//     // 영상 데이터를 다른 클라이언트에게 브로드캐스트
//     this.server.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data);
//       }
//     });
//   }

//   @SubscribeMessage('command')
//   handleMessage(client: WebSocket, @MessageBody() payload: any): void {
//     try {
//       const key = payload.key;
//       console.log(`Received key from client: ${key}`);
//       // 메시지 처리 로직을 추가합니다.
//     } catch (error) {
//       console.error('Error handling message:', error);
//       // 오류 처리 로직을 추가합니다.
//     }
//     this.server.clients.forEach((client) => {
//       if(client.readyState === WebSocket.OPEN){
//         client.send(payload);
//       }
//     });
//   }
// }
