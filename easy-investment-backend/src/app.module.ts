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
import { FormsModule } from './forms/forms.module';
import { CategoriesModule } from './categories/categories.module';
import { ProgramsModule } from './programs/programs.module';
import { ProjectsModule } from './projects/projects.module';
import { ReportsModule } from './reports/reports.module';
import { IndicatorsModule } from './indicators/indicators.module';
import { ActivitiesModule } from './activities/activities.module';
import { FrameworksModule } from './frameworks/frameworks.module';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            autoLoadEntities: true,
        }),
        AuthModule,
        PermissionModule,
        RoleModule,
        FormsModule,
        CategoriesModule,
        ProgramsModule,
        ProjectsModule,
        ReportsModule,
        IndicatorsModule,
        ActivitiesModule,
        FrameworksModule,
    ],
    controllers: [AppController, PermissionController],
    providers: [AppService, PermissionService],
})
export class AppModule {
}
