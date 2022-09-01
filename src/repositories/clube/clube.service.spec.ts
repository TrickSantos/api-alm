import { Test, TestingModule } from '@nestjs/testing';
import { ClubeService } from './clube.service';

describe('ClubeService', () => {
  let service: ClubeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubeService],
    }).compile();

    service = module.get<ClubeService>(ClubeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
