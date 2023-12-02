import { FotoEntity } from "src/foto/foto.entity/foto.entity";
export declare class AlbumEntity {
    id: string;
    fechaInicio: Date;
    fechaFin: Date;
    titulo: string;
    fotos: FotoEntity[];
}
