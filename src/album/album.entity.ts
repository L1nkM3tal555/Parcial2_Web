import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { FotoEntity } from '../foto/foto.entity';


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

