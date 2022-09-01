import { Test, TestingModule } from '@nestjs/testing';
import { EventoGateway } from './evento.gateway';
import { EventoService } from './evento.service';

describe('EventoGateway', () => {
  let gateway: EventoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventoGateway, EventoService],
    }).compile();

    gateway = module.get<EventoGateway>(EventoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
