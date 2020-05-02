import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {FormEntity} from '../forms/form.entity';

@Entity()
export class IndicatorEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @ManyToOne(type => FormEntity, form => form.indicators)
    public form: FormEntity;

    @Column('json')
    public data: any;

    @Column()
    public createdOn: Date;

    @Column()
    public createdBy: number;
}
