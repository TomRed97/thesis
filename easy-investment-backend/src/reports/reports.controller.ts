import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ReportsService} from './reports.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {ReportEntity} from './report.entity';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportService: ReportsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getReports(): Promise<ReportEntity[]> {
        return this.reportService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getReportById(@Param('id') id): Promise<ReportEntity> {
        return this.reportService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createReportById(@Body() body): Promise<ReportEntity> {
        return this.reportService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateReportById(@Body() body): Promise<ReportEntity> {
        return this.reportService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeReportById(@Param('id') id): Promise<void> {
        return this.reportService.remove(id);
    }
}
