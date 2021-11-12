import { Test, TestingModule } from '@nestjs/testing';
import { DatalabController } from './datasensors.controller';

describe('DatalabController', () => {
  let controller: DatalabController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatalabController],
    }).compile();

    controller = module.get<DatalabController>(DatalabController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
