import {Controller, Post, Req, UseGuards} from '@nestjs/common';
import { Request } from 'express';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';

@Controller('permission')
export class PermissionController {

    @UseGuards(JwtAuthGuard)
    @Post()
    public hasPermission(@Req() request: Request): Promise<boolean> {
        // tslint:disable-next-line:no-console
        console.log(request.body);
        return Promise.resolve(true);
    }
}
