import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ClubeService } from './clube.service';
import { CreateClubeDto } from './dto/create-clube.dto';
import { UpdateClubeDto } from './dto/update-clube.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
/* @UseGuards(WsAuthGuard) */
export class ClubeGateway {
  constructor(private readonly clubeService: ClubeService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('clube:create')
  async create(@MessageBody() createClubeDto: CreateClubeDto) {
    await this.clubeService.create(createClubeDto);
    this.server.emit('clube:created');
    return { status: 'sucess', message: ['Clube salvo com sucesso!'] };
  }

  @SubscribeMessage('clube:index')
  async findAll() {
    return this.clubeService.findAll();
  }

  @SubscribeMessage('clube:find')
  async findOne(@MessageBody() id: number) {
    return this.clubeService.findOne(id);
  }

  @SubscribeMessage('clube:update')
  async update(@MessageBody() updateClubeDto: UpdateClubeDto) {
    await this.clubeService.update(updateClubeDto.id, updateClubeDto);
    this.server.emit('clube:updated');
    return { status: 'sucess', message: ['Clube salvo com sucesso!'] };
  }

  @SubscribeMessage('clube:destroy')
  async remove(@MessageBody() id: number) {
    this.clubeService.remove(id);
    this.server.emit('clube:destroyed');
  }
}
