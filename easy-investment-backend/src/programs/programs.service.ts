import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ProgramEntity} from './program.entity';

@Injectable()
export class ProgramsService {
    constructor(@InjectRepository(ProgramEntity)
                private readonly programRepository: Repository<ProgramEntity>) {
    }

    public findAll(): Promise<ProgramEntity[]> {
        return this.programRepository.find();
    }

    public findOneById(id: string): Promise<ProgramEntity | undefined> {
        return this.programRepository.findOne(id);
    }

    public save(entity: ProgramEntity): Promise<ProgramEntity> {
        return this.programRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.programRepository.delete(id);
    }
}
