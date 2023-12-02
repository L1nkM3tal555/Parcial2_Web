import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RedSocialEntity } from "src/red-social/red-social.entity/red-social.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity/usuario.entity";
import { FotoEntity } from "src/foto/foto.entity/foto.entity";


@Entity()
export class AlbumEntity {
    @PrimaryGeneratedColumn({type:'bigint'})
    id: string;
 
    @Column()
    fechaInicio: Date;
 
    @Column()
    fechaFin: Date;

    @Column()
    titulo: string;

    @OneToMany(() => FotoEntity, fotos => fotos.album)
    fotos: FotoEntity[];

}

