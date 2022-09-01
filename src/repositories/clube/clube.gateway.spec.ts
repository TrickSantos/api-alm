import { Test, TestingModule } from '@nestjs/testing';
import { ClubeGateway } from './clube.gateway';
import { ClubeService } from './clube.service';

describe('ClubeGateway', () => {
  let gateway: ClubeGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubeGateway, ClubeService],
    }).compile();

    gateway = module.get<ClubeGateway>(ClubeGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
