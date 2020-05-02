import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {PermissionEntity} from '../permission/permission.entity';
import {User} from '../users/user.entity';

@Entity()
export class RoleEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @OneToMany(type => User, user => user.role)
    user: User[];

    @ManyToMany(type => PermissionEntity)
    @JoinTable()
    public permissions: PermissionEntity[];
}
