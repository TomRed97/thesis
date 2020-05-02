import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {IndicatorsService} from './indicators.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {IndicatorEntity} from './indicator.entity';

@Controller('indicators')
export class IndicatorsController {
    constructor(private readonly indicatorService: IndicatorsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getIndicators(): Promise<IndicatorEntity[]> {
        return this.indicatorService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getIndicatorById(@Param('id') id): Promise<IndicatorEntity> {
        return this.indicatorService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createIndicatorById(@Body() body): Promise<IndicatorEntity> {
        return this.indicatorService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateIndicatorById(@Body() body): Promise<IndicatorEntity> {
        return this.indicatorService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeIndicatorById(@Param('id') id): Promise<void> {
        return this.indicatorService.remove(id);
    }
}
