import { Module } from '@nestjs/common';
import { ProgramsController } from './programs.controller';
import { ProgramsService } from './programs.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProgramEntity} from './program.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramEntity])],
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}
