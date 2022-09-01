import { UseGuards } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { WsAuthGuard } from 'auth/guards/ws.guard';
import { ClubeService } from './clube.service';
import { CreateClubeDto } from './dto/create-clube.dto';
import { UpdateClubeDto } from './dto/update-clube.dto';

@WebSocketGateway({ cors: '*' })
/* @UseGuards(WsAuthGuard) */
export class ClubeGateway {
  constructor(private readonly clubeService: ClubeService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('clube:create')
  async create(@MessageBody() createClubeDto: CreateClubeDto) {
    await this.clubeService.create(createClubeDto);
    this.server.emit('clube:created');
  }

  @SubscribeMessage('clube:index')
  findAll() {
    return this.clubeService.findAll();
  }

  @SubscribeMessage('clube:find')
  findOne(@MessageBody() id: number) {
    return this.clubeService.findOne(id);
  }

  @SubscribeMessage('clube:update')
  update(@MessageBody() updateClubeDto: UpdateClubeDto) {
    this.server.emit('clube:updated');
    return this.clubeService.update(updateClubeDto.id, updateClubeDto);
  }

  @SubscribeMessage('clube:destroy')
  remove(@MessageBody() id: number) {
    this.clubeService.remove(id);
    this.server.emit('clube:destroyed');
  }
}
