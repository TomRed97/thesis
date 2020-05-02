import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ActivitiesService} from './activities.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {ActivityEntity} from './activity.entity';

@Controller('activities')
export class ActivitiesController {
    constructor(private readonly activityService: ActivitiesService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getActivities(): Promise<ActivityEntity[]> {
        return this.activityService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getActivityById(@Param('id') id): Promise<ActivityEntity> {
        return this.activityService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createActivityById(@Body() body): Promise<ActivityEntity> {
        return this.activityService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateActivityById(@Body() body): Promise<ActivityEntity> {
        return this.activityService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeActivityById(@Param('id') id): Promise<void> {
        return this.activityService.remove(id);
    }
}
