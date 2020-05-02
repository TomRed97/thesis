import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {FormEntity} from '../forms/form.entity';
import {IndicatorEntity} from '../indicators/indicator.entity';

@Entity()
export class ProgramEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @ManyToOne(type => FormEntity, form => form.programs)
    public form: FormEntity;

    @Column('json')
    public data: any;

    @Column()
    public createdOn: Date;

    @Column()
    public createdBy: number;

    @ManyToMany(type => IndicatorEntity)
    @JoinTable()
    public indicators: IndicatorEntity[];
}
