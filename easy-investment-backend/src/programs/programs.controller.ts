import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ProgramsService} from './programs.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {ProgramEntity} from './program.entity';

@Controller('programs')
export class ProgramsController {
    constructor(private readonly programService: ProgramsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getPrograms(): Promise<ProgramEntity[]> {
        return this.programService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getProgramById(@Param('id') id): Promise<ProgramEntity> {
        return this.programService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createProgramById(@Body() body): Promise<ProgramEntity> {
        return this.programService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateProgramById(@Body() body): Promise<ProgramEntity> {
        return this.programService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeProgramById(@Param('id') id): Promise<void> {
        return this.programService.remove(id);
    }
}
