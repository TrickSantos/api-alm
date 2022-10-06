import { Test, TestingModule } from '@nestjs/testing';
import { PresencaGateway } from './presenca.gateway';
import { PresencaService } from './presenca.service';

describe('PresencaGateway', () => {
  let gateway: PresencaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresencaGateway, PresencaService],
    }).compile();

    gateway = module.get<PresencaGateway>(PresencaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
