import { Test, TestingModule } from '@nestjs/testing';
import { LabControllerService } from './lab-controller.service';

describe('LabControllerService', () => {
  let service: LabControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabControllerService],
    }).compile();

    service = module.get<LabControllerService>(LabControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
