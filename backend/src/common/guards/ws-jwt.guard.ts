import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client = context.switchToWs().getClient();
      const data = context.switchToWs().getData();
      
      // Get token from handshake or from message data
      const token = 
        client.handshake?.auth?.token || 
        client.handshake?.headers?.authorization?.split(' ')[1] ||
        data.token;

      if (!token) {
        throw new WsException('Unauthorized');
      }

      const payload = this.jwtService.verify(token);
      
      // Attach user to the data
      data.userId = payload.sub;
      
      return true;
    } catch (error) {
      throw new WsException('Unauthorized');
    }
  }
}
