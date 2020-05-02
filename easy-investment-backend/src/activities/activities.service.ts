import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ActivityEntity} from './activity.entity';

@Injectable()
export class ActivitiesService {
    constructor(@InjectRepository(ActivityEntity)
                private readonly activityRepository: Repository<ActivityEntity>) {
    }

    public findAll(): Promise<ActivityEntity[]> {
        return this.activityRepository.find();
    }

    public findOneById(id: string): Promise<ActivityEntity | undefined> {
        return this.activityRepository.findOne(id);
    }

    public save(entity: ActivityEntity): Promise<ActivityEntity> {
        return this.activityRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.activityRepository.delete(id);
    }
}
