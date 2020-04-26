import {Controller, Get, Param, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user.entity';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getUserById(@Param('id') id): Promise<User> {
        return this.usersService.findOneById(id);
    }
}
