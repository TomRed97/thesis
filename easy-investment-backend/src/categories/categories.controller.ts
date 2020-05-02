import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {CategoriesService} from './categories.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {CategoryEntity} from './category.entity';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoryService: CategoriesService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getCategories(): Promise<CategoryEntity[]> {
        return this.categoryService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getCategoryById(@Param('id') id): Promise<CategoryEntity> {
        return this.categoryService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCategoryById(@Body() body): Promise<CategoryEntity> {
        return this.categoryService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateCategoryById(@Body() body): Promise<CategoryEntity> {
        return this.categoryService.save(body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeCategoryById(@Param('id') id): Promise<void> {
        return this.categoryService.remove(id);
    }
}
