import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import {Repository} from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
                private readonly usersRepository: Repository<User>) {
    }

    public findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    public findOneById(id: string): Promise<User | undefined> {
        return this.usersRepository.findOne(id);
    }

    public findOneByUsername(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({username}, { relations: ['role'] });
    }
}
