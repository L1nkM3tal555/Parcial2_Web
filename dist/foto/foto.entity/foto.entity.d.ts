import { AlbumEntity } from "src/album/album.entity/album.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity/usuario.entity";
export declare class FotoEntity {
    id: string;
    fecha: string;
    iso: number;
    velObturacion: number;
    apertura: number;
    usuario: UsuarioEntity;
    album: AlbumEntity;
}
