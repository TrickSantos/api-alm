import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { IndexUsuarioDto } from './dto/index-usuario.dto';

@WebSocketGateway({ cors: '*' })
export class UsuarioGateway {
  constructor(private readonly usuarioService: UsuarioService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('usuario:create')
  async create(@MessageBody() createUsuarioDto: CreateUsuarioDto) {
    await this.usuarioService.create(createUsuarioDto);
    this.server.emit('usuario:created');
    return { status: 'sucess', message: ['Membro salvo com sucesso!'] };
  }

  @SubscribeMessage('usuario:index')
  async findAll(@MessageBody() data: IndexUsuarioDto) {
    return await this.usuarioService.findAll(data);
  }

  @SubscribeMessage('usuario:find')
  async findOne(@MessageBody() id: number) {
    return await this.usuarioService.findById(id);
  }

  @SubscribeMessage('usuario:update')
  async update(@MessageBody() updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuarioService.update(updateUsuarioDto.id, updateUsuarioDto);
    this.server.emit('usuario:updated');
    return { status: 'sucess', message: ['Membro salvo com sucesso!'] };
  }

  @SubscribeMessage('usuario:destroy')
  async remove(@MessageBody() id: number) {
    await this.usuarioService.remove(id);
    this.server.emit('usuario:destroyed');
  }
}
