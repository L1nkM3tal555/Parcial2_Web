import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntityEntity } from "../usuario-entity.entity/usuario-entity.entity";

@Entity()
export class RedSocialEntityEntity {
    @PrimaryGeneratedColumn("uuid")
    id: long;
 
    @Column()
    nombre: string;
 
    @Column()
    slogan: string;

    @OneToMany(() => UsuarioEntityEntity, usuarios => .usuarios)
    fotos: FotoEntityEntity[];

}