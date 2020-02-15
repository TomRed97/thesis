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

    public findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }
}