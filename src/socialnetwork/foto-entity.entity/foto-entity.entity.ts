
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RedSocialEntityEntity } from "../red-social-entity.entity/red-social-entity.entity";
import { AlbumEntityEntity } from "../album-entity.entity/album-entity.entity";
import { UsuarioEntityEntity } from "../usuario-entity.entity/usuario-entity.entity";


@Entity()
export class FotoEntityEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    fecha: string;
 
    @Column({type:'int'})
    iso: number;

    @Column({type:'int'})
    velObturacion: number;

    @Column({type:'int'})
    apertura: number;

    //@ManyToOne(() => RedSocialEntityEntity, redSocial => redSocial.fotos)
    //redSocial: RedSocialEntityEntity;

    @ManyToOne(() => UsuarioEntityEntity, usuario => usuario.fotos)
    usuario: UsuarioEntityEntity;

    @ManyToOne(() => AlbumEntityEntity, album => album.fotos)
    album: AlbumEntityEntity;

}