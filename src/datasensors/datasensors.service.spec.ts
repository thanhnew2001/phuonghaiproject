import { Test, TestingModule } from '@nestjs/testing';
import { DatalabService } from './datasensors.service';

describe('DatalabService', () => {
  let service: DatalabService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatalabService],
    }).compile();

    service = module.get<DatalabService>(DatalabService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
