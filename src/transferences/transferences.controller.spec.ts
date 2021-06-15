import { Test, TestingModule } from '@nestjs/testing';
import { TransferencesController } from './transferences.controller';

describe('TransferencesController', () => {
  let controller: TransferencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferencesController],
    }).compile();

    controller = module.get<TransferencesController>(TransferencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
