import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './auth/auth.module';
import { PermissionService } from './permission/permission.service';
import { PermissionController } from './permission/permission.controller';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            autoLoadEntities: true,
        }),
        AuthModule,
        PermissionModule,
        RoleModule,
    ],
    controllers: [AppController, PermissionController],
    providers: [AppService, PermissionService],
})
export class AppModule {
}
