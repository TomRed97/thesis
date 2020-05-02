import {MigrationInterface, QueryRunner} from 'typeorm';

export class UserDataInsertion1581782978234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            INSERT INTO "role_entity"
            (
            "name"
            )
            VALUES
            (
            'administrator'
            )
        `);
        await queryRunner.query(`
            INSERT INTO "permission_entity"
            (
            "name"
            )
            VALUES
            (
            '5fd5675e-8a2a-11ea-bc55-0242ac130003'
            )
        `);

        await queryRunner.query(`
            INSERT INTO "user"
            (
            "firstName",
            "lastName",
            "email",
            "username",
            "password",
            "workPlace",
            "birthDate"
            )
            VALUES
            (
            'admin',
            'admin',
            'admin@gmail.com',
            'admin',
            '$2b$12$lQd6FepQXJr360S2XhkD/eIMMIYS/KsWEOFRw3UL6RheMOZddpNTm',
            'NUACA',
            '1997-01-01 19:10:25'
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
