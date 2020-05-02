import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../users/user.entity';

@Entity()
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column('json')
    public values: any;

    @Column()
    public createdOn: Date;

    @Column()
    public createdBy: number;
}
