
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RedSocialEntityEntity } from "../red-social-entity.entity/red-social-entity.entity";
import { UsuarioEntityEntity } from "../usuario-entity.entity/usuario-entity.entity";
import { FotoEntityEntity } from "../foto-entity.entity/foto-entity.entity";


@Entity()
export class AlbumEntityEntity {
    @PrimaryGeneratedColumn({type:'bigint'})
    id: string;
 
    @Column()
    fechaInicio: Date;
 
    @Column()
    fechaFin: Date;

    @Column()
    titulo: string;

    @OneToMany(() => FotoEntityEntity, fotos => fotos.album)
    fotos: FotoEntityEntity[];

}