import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AlbumEntity } from "../album/album.entity";
import { UsuarioEntity } from "../usuario/usuario.entity";


@Entity()
export class FotoEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    fecha: Date;
 
    @Column({type:'int'})
    iso: number;

    @Column({type:'int'})
    velObturacion: number;

    @Column({type:'int'})
    apertura: number;

    //@ManyToOne(() => RedSocialEntity, redSocial => redSocial.fotos)
    //redSocial: RedSocialEntity;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.fotos)
    usuario: UsuarioEntity;

    @ManyToOne(() => AlbumEntity, album => album.fotos)
    album: AlbumEntity;

}
