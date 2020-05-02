import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class PermissionEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;
}
