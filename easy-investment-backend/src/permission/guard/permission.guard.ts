import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {Reflector} from '@nestjs/core';
import {User} from '../../users/user.entity';

@Injectable()
export class PermissionGuard implements CanActivate {

    constructor(private reflector: Reflector) {
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const permissions = this.reflector.get<string[]>('permission', context.getHandler());
        if (!permissions) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return this.isValidUser(permissions, user);
    }

    public isValidUser(permissions: string[], user: User): boolean {
        return permissions.some((permission) => {
            return user.permissions.some((userPermission) => {
                return userPermission.id.toString() === permission;
            });
        });
    }
}
