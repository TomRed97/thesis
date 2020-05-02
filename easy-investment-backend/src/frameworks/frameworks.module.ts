import {Module} from '@nestjs/common';
import {FrameworksController} from './frameworks.controller';
import {FrameworksService} from './frameworks.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {FrameworkEntity} from './framework.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FrameworkEntity])],
    controllers: [FrameworksController],
    providers: [FrameworksService],
})
export class FrameworksModule {
}
