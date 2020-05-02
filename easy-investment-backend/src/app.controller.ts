import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './auth/auth.service';
import {LocalAuthGuard} from './auth/local-auth.guard';
import {RoleGuard} from './role/guard/role.guard';
import {Role} from './role/decorator/role.decorator';
import {Permission} from './permission/decorator/permission.decorator';
import {JwtAuthGuard} from './auth/jwt-auth.guard';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Role('1')
    @Permission('1')
    @Get('hello')
    async hello() {
        return 'hello';
    }
}
