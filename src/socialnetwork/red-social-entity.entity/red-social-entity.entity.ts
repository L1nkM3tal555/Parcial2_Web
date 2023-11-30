import { Column, Entity, OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntityEntity } from "../usuario-entity.entity/usuario-entity.entity";
import { FotoEntityEntity } from "../foto-entity.entity/foto-entity.entity";

@Entity()
export class RedSocialEntityEntity {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: string;
 
    @Column()
    nombre: string;
 
    @Column()
    slogan: string;

    @OneToMany(() => UsuarioEntityEntity, usuarios => usuarios.redSocial)
    usuarios: UsuarioEntityEntity[];

}