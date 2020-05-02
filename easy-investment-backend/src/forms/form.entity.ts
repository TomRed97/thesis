import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ProgramEntity} from "../programs/program.entity";
import {ProjectEntity} from "../projects/project.entity";
import {ActivityEntity} from "../activities/activity.entity";
import {IndicatorEntity} from "../indicators/indicator.entity";

@Entity()
export class FormEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public type: number;

    @Column('json')
    public structure: any;

    @Column()
    public createdOn: Date;

    @Column()
    public createdBy: number;

    @OneToMany(type => ProgramEntity, program => program.form)
    programs: ProgramEntity[];

    @OneToMany(type => ProjectEntity, project => project.form)
    projects: ProjectEntity[];

    @OneToMany(type => ActivityEntity, activity => activity.form)
    activities: ActivityEntity[];

    @OneToMany(type => IndicatorEntity, indicator => indicator.form)
    indicators: IndicatorEntity[];
}
