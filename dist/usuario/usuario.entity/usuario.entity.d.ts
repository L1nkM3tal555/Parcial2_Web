import { RedSocialEntity } from "src/red-social/red-social.entity/red-social.entity";
import { FotoEntity } from "src/foto/foto.entity/foto.entity";
export declare class UsuarioEntity {
    id: string;
    nombre: string;
    telefono: string;
    redSocial: RedSocialEntity;
    fotos: FotoEntity[];
}
