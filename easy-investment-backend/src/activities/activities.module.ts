import {Module} from '@nestjs/common';
import {ActivitiesController} from './activities.controller';
import {ActivitiesService} from './activities.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ActivityEntity} from './activity.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ActivityEntity])],
    controllers: [ActivitiesController],
    providers: [ActivitiesService],
})
export class ActivitiesModule {
}
