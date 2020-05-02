import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FormEntity} from './form.entity';
import {Repository} from 'typeorm';

@Injectable()
export class FormsService {
    constructor(@InjectRepository(FormEntity)
                private readonly formRepository: Repository<FormEntity>) {
    }

    public findAll(): Promise<FormEntity[]> {
        return this.formRepository.find();
    }

    public findOneById(id: string): Promise<FormEntity | undefined> {
        return this.formRepository.findOne(id);
    }

    public save(entity: FormEntity): Promise<FormEntity> {
        return this.formRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.formRepository.delete(id);
    }
}
