import { Module } from '@nestjs/common';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {FormEntity} from './form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormEntity])],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
