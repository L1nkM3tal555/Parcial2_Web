import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FotoEntity } from './foto.entity/foto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { AlbumEntity } from 'src/album/album.entity/album.entity';

@Injectable()
export class FotoService {
    constructor(
        @InjectRepository(FotoEntity)
        private readonly fotoRepository: Repository<FotoEntity>
    ){}

    async create(foto: FotoEntity): Promise<FotoEntity> {
        const minIso = 100;
        const maxIso = 6400;

        const minVelO = 2;
        const maxVelO = 250;

        const minAp = 1;
        const maxAp = 32;

        const medioIso = (minIso+maxIso)/2;
        const medioVelO = (minVelO+maxVelO)/2;
        const medioAp = (minAp+maxAp)/2;

        var cont = 0;

        if(foto.iso > medioIso){
            cont++;
        }
        
        if(foto.velObturacion > medioVelO){
            cont++;
        }

        if(foto.apertura > medioAp){
            cont++;
        }

        if(cont <= 2){
            if (foto.iso >= minIso && foto.iso <= maxIso){
                if (foto.velObturacion >= minVelO && foto.velObturacion <= maxVelO){
                    if (foto.apertura >= minAp && foto.apertura <= maxAp){
                        return await this.fotoRepository.save(foto);
                    }
                    else{
                        throw new BusinessLogicException("Foto's aperture speed should be between 1 and 32", BusinessError.PRECONDITION_FAILED);
                    }
                }
                else{
                    throw new BusinessLogicException("Foto's obturation speed should be between 2 and 250", BusinessError.PRECONDITION_FAILED);
                }
            }
            else{
                throw new BusinessLogicException("Foto's ISO should be between 100 and 6400", BusinessError.PRECONDITION_FAILED);
            }
        }
        else{
            throw new BusinessLogicException("More than 2 caracteristics (ISO, obturation speed, aperture) are over the mean of it's limits", BusinessError.PRECONDITION_FAILED);
        }
        
    }
    
    async findAllFotos(): Promise<FotoEntity[]> {
        return await this.fotoRepository.find({ relations: ["usuario", "album"] });
    }

    async findFotoById(id: string): Promise<FotoEntity> {
        const foto: FotoEntity = await this.fotoRepository.findOne({where: {id}, relations: ["usuario", "album"] } );
        if (!foto)
          throw new BusinessLogicException("The foto with the given id was not found", BusinessError.NOT_FOUND);
   
        return foto;
    }

}
