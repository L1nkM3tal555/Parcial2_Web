import { FotoEntityEntity } from "../foto-entity.entity/foto-entity.entity";
export declare class AlbumEntityEntity {
    id: string;
    fechaInicio: Date;
    fechaFin: Date;
    titulo: string;
    fotos: FotoEntityEntity[];
}
