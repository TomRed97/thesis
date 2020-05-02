import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ProjectEntity} from './project.entity';

@Injectable()
export class ProjectsService {
    constructor(@InjectRepository(ProjectEntity)
                private readonly projectRepository: Repository<ProjectEntity>) {
    }

    public findAll(): Promise<ProjectEntity[]> {
        return this.projectRepository.find();
    }

    public findOneById(id: string): Promise<ProjectEntity | undefined> {
        return this.projectRepository.findOne(id);
    }

    public save(entity: ProjectEntity): Promise<ProjectEntity> {
        return this.projectRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.projectRepository.delete(id);
    }
}
