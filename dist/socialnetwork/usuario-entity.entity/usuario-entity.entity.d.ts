import { RedSocialEntityEntity } from "../red-social-entity.entity/red-social-entity.entity";
import { FotoEntityEntity } from "../foto-entity.entity/foto-entity.entity";
export declare class UsuarioEntityEntity {
    id: string;
    nombre: string;
    telefono: string;
    redSocial: RedSocialEntityEntity;
    fotos: FotoEntityEntity[];
}
