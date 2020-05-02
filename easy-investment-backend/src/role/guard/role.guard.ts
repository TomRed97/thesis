import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {Reflector} from '@nestjs/core';
import {User} from '../../users/user.entity';
import {UsersService} from '../../users/users.service';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector, private userService: UsersService) {
    }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const roles = this.reflector.get<string[]>('role', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = await this.userService.findOneByUsername(request.user.username);
        return this.isValidUser(roles, user);
    }

    public isValidUser(roles: string[], user: User): boolean {
        if (!user.role) {
            return false;
        }
        return roles.some((role) => {
            return user.role.id.toString() === role;
        });
    }
}
