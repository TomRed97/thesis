import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ProjectsService} from './projects.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {ProjectEntity} from './project.entity';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getProjects(): Promise<ProjectEntity[]> {
        return this.projectService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getProjectById(@Param('id') id): Promise<ProjectEntity> {
        return this.projectService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createProjectById(@Body() body): Promise<ProjectEntity> {
        return this.projectService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateProjectById(@Body() body): Promise<ProjectEntity> {
        return this.projectService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeProjectById(@Param('id') id): Promise<void> {
        return this.projectService.remove(id);
    }
}
