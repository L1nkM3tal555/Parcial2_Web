import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from '../album/album.entity';
import { FotoEntity } from '../foto/foto.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumFotoService {

    constructor(
        @InjectRepository(AlbumEntity)
        private readonly albumRepository: Repository<AlbumEntity>,
    
        @InjectRepository(FotoEntity)
        private readonly fotoRepository: Repository<FotoEntity>
    ) {}

    async addFotoAlbum(albumId: string, fotoId: string): Promise<AlbumEntity> {
        const foto: FotoEntity = await this.fotoRepository.findOne({where: {id: fotoId}});
        if (!foto)
          throw new BusinessLogicException("The foto with the given id was not found", BusinessError.NOT_FOUND);
      
        const album: AlbumEntity = await this.albumRepository.findOne({where: {id: albumId}, relations: ["fotos"]})
        if (!album)
          throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);
        

        if (foto.fecha.getTime() < album.fechaFin.getTime() && foto.fecha.getTime() > album.fechaInicio.getTime()){
            album.fotos = [...album.fotos, foto];
            return await this.albumRepository.save(album);
        }
        
      }

      async deleteFoto(albumId: string, fotoId: string) {
        const foto: FotoEntity = await this.fotoRepository.findOne({where: {id: fotoId}});
        if (!foto)
          throw new BusinessLogicException("The foto with the given id was not found", BusinessError.NOT_FOUND);
      
        const album: AlbumEntity = await this.albumRepository.findOne({where: {id: albumId}, relations: ["fotos"]})
        if (!album)
          throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);
        
        const albumFoto: FotoEntity = album.fotos.find(e => e.id === foto.id);
        if (!albumFoto)
           throw new BusinessLogicException("The foto with the given id is not associated to the album", BusinessError.PRECONDITION_FAILED)


        if (album.fotos.length === 1){
            album.fotos = album.fotos.filter(e => e.id !== fotoId);
            await this.fotoRepository.remove(foto);
            await this.albumRepository.remove(album);
        }
        else{
            album.fotos = album.fotos.filter(e => e.id !== fotoId);
            await this.albumRepository.save(album);
            await this.fotoRepository.remove(foto);
        }
        
        
      }
}
