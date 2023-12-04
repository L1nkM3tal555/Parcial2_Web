import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RedSocialEntity } from "../red-social/red-social.entity";
//import { AlbumEntity } from "src/album/album.entity/album.entity";
import { FotoEntity } from "../foto/foto.entity";


@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn({type:'bigint'})
    id: string;
 
    @Column()
    nombre: string;
 
    @Column()
    telefono: string;

    @ManyToOne(() => RedSocialEntity, redSocial => redSocial.usuarios)
    redSocial: RedSocialEntity;

    @OneToMany(() => FotoEntity, fotos => fotos.usuario)
    fotos: FotoEntity[];

}