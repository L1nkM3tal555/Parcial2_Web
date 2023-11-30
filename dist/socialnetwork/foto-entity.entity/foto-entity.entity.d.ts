import { AlbumEntityEntity } from "../album-entity.entity/album-entity.entity";
import { UsuarioEntityEntity } from "../usuario-entity.entity/usuario-entity.entity";
export declare class FotoEntityEntity {
    id: string;
    fecha: string;
    iso: number;
    velObturacion: number;
    apertura: number;
    usuario: UsuarioEntityEntity;
    album: AlbumEntityEntity;
}
