import {MigrationInterface, QueryRunner} from 'typeorm';

export class UserDataInsertion1581782978234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
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
            '$2y$12$SNL5OsqdY6NaiLweT3oDvevHxHZn8kFN4IG0.O3RPcvF0v3dnbVVG',
            'NUACA',
            '1997-01-01 19:10:25'
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
