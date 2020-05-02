import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ReportEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @Column('json')
    public data: any;

    @Column()
    public createdOn: Date;

    @Column()
    public createdBy: number;

}
