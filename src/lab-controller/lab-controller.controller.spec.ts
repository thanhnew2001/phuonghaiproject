import { Test, TestingModule } from '@nestjs/testing';
import { LabControllerController } from './lab-controller.controller';

describe('LabControllerController', () => {
  let controller: LabControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabControllerController],
    }).compile();

    controller = module.get<LabControllerController>(LabControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
