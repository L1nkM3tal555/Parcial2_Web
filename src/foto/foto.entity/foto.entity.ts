import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AlbumEntity } from "src/album/album.entity/album.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity/usuario.entity";


@Entity()
export class FotoEntity {
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

    //@ManyToOne(() => RedSocialEntity, redSocial => redSocial.fotos)
    //redSocial: RedSocialEntity;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.fotos)
    usuario: UsuarioEntity;

    @ManyToOne(() => AlbumEntity, album => album.fotos)
    album: AlbumEntity;

}
