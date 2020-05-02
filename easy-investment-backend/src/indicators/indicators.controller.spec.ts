import { Test, TestingModule } from '@nestjs/testing';
import { IndicatorsController } from './indicators.controller';

describe('Indicators Controller', () => {
  let controller: IndicatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndicatorsController],
    }).compile();

    controller = module.get<IndicatorsController>(IndicatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
