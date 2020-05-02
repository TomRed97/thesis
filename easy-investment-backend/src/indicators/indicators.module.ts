import { Module } from '@nestjs/common';
import { IndicatorsController } from './indicators.controller';
import { IndicatorsService } from './indicators.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {IndicatorEntity} from './indicator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IndicatorEntity])],
  controllers: [IndicatorsController],
  providers: [IndicatorsService],
})
export class IndicatorsModule {}
