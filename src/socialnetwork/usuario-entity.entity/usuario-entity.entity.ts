

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RedSocialEntityEntity } from "../red-social-entity.entity/red-social-entity.entity";
import { AlbumEntityEntity } from "../album-entity.entity/album-entity.entity";
import { FotoEntityEntity } from "../foto-entity.entity/foto-entity.entity";


@Entity()
export class UsuarioEntityEntity {
    @PrimaryGeneratedColumn({type:'bigint'})
    id: string;
 
    @Column()
    nombre: string;
 
    @Column()
    telefono: string;

    @ManyToOne(() => RedSocialEntityEntity, redSocial => redSocial.usuarios)
    redSocial: RedSocialEntityEntity;

    @OneToMany(() => FotoEntityEntity, fotos => fotos.usuario)
    fotos: FotoEntityEntity[];

}