import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {IndicatorEntity} from './indicator.entity';

@Injectable()
export class IndicatorsService {
    constructor(@InjectRepository(IndicatorEntity)
                private readonly indicatorRepository: Repository<IndicatorEntity>) {
    }

    public findAll(): Promise<IndicatorEntity[]> {
        return this.indicatorRepository.find();
    }

    public findOneById(id: string): Promise<IndicatorEntity | undefined> {
        return this.indicatorRepository.findOne(id);
    }

    public save(entity: IndicatorEntity): Promise<IndicatorEntity> {
        return this.indicatorRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.indicatorRepository.delete(id);
    }
}
