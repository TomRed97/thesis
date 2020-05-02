import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CategoryEntity} from './category.entity';

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(CategoryEntity)
                private readonly categoryRepository: Repository<CategoryEntity>) {
    }

    public findAll(): Promise<CategoryEntity[]> {
        return this.categoryRepository.find();
    }

    public findOneById(id: string): Promise<CategoryEntity | undefined> {
        return this.categoryRepository.findOne(id);
    }

    public save(entity: CategoryEntity): Promise<CategoryEntity> {
        return this.categoryRepository.save(entity);
    }

    public async remove(id: string): Promise<void> {
        await this.categoryRepository.delete(id);
    }
}
