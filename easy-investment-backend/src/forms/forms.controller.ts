import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {FormsService} from './forms.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {FormEntity} from './form.entity';

@Controller('forms')
export class FormsController {
    constructor(private readonly formService: FormsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getForms(): Promise<FormEntity[]> {
        return this.formService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getFormById(@Param('id') id): Promise<FormEntity> {
        return this.formService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createFormById(@Body() body): Promise<FormEntity> {
        return this.formService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateFormById(@Body() body): Promise<FormEntity> {
        return this.formService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeFormById(@Param('id') id): Promise<void> {
        return this.formService.remove(id);
    }
}
