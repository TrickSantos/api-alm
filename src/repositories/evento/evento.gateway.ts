import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { WsAuthGuard } from 'auth/guards/ws.guard';
import {
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WsExceptionFilter } from 'ws.filter';

@WebSocketGateway({ cors: '*' })
@UseGuards(WsAuthGuard)
@UseFilters(new WsExceptionFilter())
@UsePipes(new ValidationPipe({ transform: true }))
export class EventoGateway {
  constructor(private readonly eventoService: EventoService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('evento:create')
  async create(@MessageBody() createEventoDto: CreateEventoDto) {
    await this.eventoService.create(createEventoDto);
    this.server.emit('evento:created');
    return { status: 'sucess', message: ['Evento salvo com sucesso!'] };
  }

  @SubscribeMessage('evento:index')
  findAll() {
    return this.eventoService.findAll();
  }

  @SubscribeMessage('evento:find')
  findOne(@MessageBody() id: number) {
    return this.eventoService.findOne(id);
  }

  @SubscribeMessage('evento:update')
  async update(@MessageBody() updateEventoDto: UpdateEventoDto) {
    await this.eventoService.update(updateEventoDto.id, updateEventoDto);
    this.server.emit('evento:updated');
    return { status: 'sucess', message: ['Evento salvo com sucesso!'] };
  }

  @SubscribeMessage('evento:destroy')
  async remove(@MessageBody() id: number) {
    await this.eventoService.remove(id);
    this.server.emit('evento:destroyed');
  }
}
