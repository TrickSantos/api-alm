import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PresencaService } from './presenca.service';
import { CreatePresencaDto } from './dto/create-presenca.dto';
import { WsAuthGuard } from 'auth/guards/ws.guard';
import {
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WsExceptionFilter } from 'ws.filter';
import { Presencas } from './dto/presenca.dto';

@WebSocketGateway({
  cors: '*:*',
})
@UseGuards(WsAuthGuard)
@UseFilters(new WsExceptionFilter())
@UsePipes(new ValidationPipe({ transform: true }))
export class PresencaGateway {
  constructor(private readonly presencaService: PresencaService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('presenca:create')
  async create(@MessageBody() createPresencaDto: CreatePresencaDto) {
    let clube = await this.presencaService.verificaPorcentagem(
      createPresencaDto,
    );

    if (clube.porcentagem === 100) {
      return { status: 'sucess', message: ['Presenca salva com sucesso!'] };
    }

    await this.presencaService.create(createPresencaDto);
    this.server.emit('presenca:created');
    clube = await this.presencaService.verificaPorcentagem(createPresencaDto);

    if (clube.porcentagem === 100) {
      this.server.emit('ganhador', clube);
      return { status: 'sucess', message: ['Presenca salva com sucesso!'] };
    }
  }

  @SubscribeMessage('presenca:index')
  findAll() {
    return this.presencaService.findAll();
  }

  @SubscribeMessage('presenca:getPresences')
  getPresences(@MessageBody() id: number) {
    return this.presencaService.getPresencasByEventId(id);
  }

  @SubscribeMessage('presenca:find')
  findOne(@MessageBody() id: number) {
    return this.presencaService.findOne(id);
  }

  @SubscribeMessage('presenca:destroy')
  async remove(@MessageBody() id: number) {
    await this.presencaService.remove(id);
    this.server.emit('presenca:destroyed');
  }

  @SubscribeMessage('ganhador')
  ganhador(@MessageBody() presenca: Presencas) {
    this.server.emit('ganhador', presenca);
  }
}
