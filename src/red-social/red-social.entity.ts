import { Column, Entity, OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntity } from "../usuario/usuario.entity";
//import { FotoEntity } from "src/foto/foto.entity/foto.entity";

@Entity()
export class RedSocialEntity {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: string;
 
    @Column()
    nombre: string;
 
    @Column()
    slogan: string;

    @OneToMany(() => UsuarioEntity, usuarios => usuarios.redSocial)
    usuarios: UsuarioEntity[];

}
