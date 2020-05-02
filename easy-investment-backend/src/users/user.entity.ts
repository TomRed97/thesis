import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {RoleEntity} from '../role/role.entity';
import {PermissionEntity} from '../permission/permission.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public email: string;

    @Column()
    public username: string;

    @Column()
    public password: string;

    @Column()
    public workPlace: string;

    @Column({nullable: true})
    public birthDate: Date;

    @ManyToOne(type => RoleEntity, role => role.user)
    public role: RoleEntity;

    @ManyToMany(type => PermissionEntity)
    @JoinTable()
    public permissions: PermissionEntity[];
}
