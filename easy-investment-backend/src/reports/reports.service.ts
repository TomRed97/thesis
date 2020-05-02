import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ReportEntity} from './report.entity';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(ReportEntity)
                private readonly reportRepository: Repository<ReportEntity>) {
    }

    public findAll(): Promise<ReportEntity[]> {
        return this.reportRepository.find();
    }

    public findOneById(id: string): Promise<ReportEntity | undefined> {
        return this.reportRepository.findOne(id);
    }

    public save(entity: ReportEntity): Promise<ReportEntity> {
        return this.reportRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.reportRepository.delete(id);
    }
}
