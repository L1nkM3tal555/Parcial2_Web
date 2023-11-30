
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RedSocialEntityEntity } from "../red-social-entity.entity/red-social-entity.entity";


@Entity()
export class FotoEntityEntity {
    @PrimaryGeneratedColumn("uuid")
    id: long;
 
    @Column()
    fecha: string;
 
    @Column()
    iso: int;

    @Column()
    velObturacion: int;

    @Column()
    apertura: int;

    @ManyToOne(() => RedSocialEntityEntity, redSocial => redSocial.fotos)
    redSocial: RedSocialEntityEntity;

}