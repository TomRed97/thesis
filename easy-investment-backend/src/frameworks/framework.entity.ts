import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class FrameworkEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @Column()
    public type: number;

    @Column('json')
    public data: any;

    @Column()
    public createdOn: Date;

    @Column()
    public createdBy: number;

}
