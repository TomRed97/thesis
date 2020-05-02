import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {FrameworkEntity} from './framework.entity';

@Injectable()
export class FrameworksService {
    constructor(@InjectRepository(FrameworkEntity)
                private readonly frameworkRepository: Repository<FrameworkEntity>) {
    }

    public findAll(): Promise<FrameworkEntity[]> {
        return this.frameworkRepository.find();
    }

    public findOneById(id: string): Promise<FrameworkEntity | undefined> {
        return this.frameworkRepository.findOne(id);
    }

    public save(entity: FrameworkEntity): Promise<FrameworkEntity> {
        return this.frameworkRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.frameworkRepository.delete(id);
    }
}
