import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {FrameworksService} from './frameworks.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {FrameworkEntity} from './framework.entity';

@Controller('frameworks')
export class FrameworksController {

    constructor(private readonly frameworkService: FrameworksService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getFrameworks(): Promise<FrameworkEntity[]> {
        return this.frameworkService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getFrameworkById(@Param('id') id): Promise<FrameworkEntity> {
        return this.frameworkService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createFrameworkById(@Body() body): Promise<FrameworkEntity> {
        return this.frameworkService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateFrameworkById(@Body() body): Promise<FrameworkEntity> {
        return this.frameworkService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeFrameworkById(@Param('id') id): Promise<void> {
        return this.frameworkService.remove(id);
    }
}
