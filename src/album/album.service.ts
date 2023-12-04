import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from './album.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(AlbumEntity)
        private readonly albumRepository: Repository<AlbumEntity>
    ){}

    async createAlbum(album: AlbumEntity): Promise<AlbumEntity> {
        if (album.titulo !== '' && album.titulo){
            return await this.albumRepository.save(album);
        }
        else{
            throw new BusinessLogicException("Album's title should not be empty or null", BusinessError.PRECONDITION_FAILED);
        }
    }

    async findAlbumById(id: string): Promise<AlbumEntity> {
        const album: AlbumEntity = await this.albumRepository.findOne({where: {id}, relations: ["fotos"] } );
        if (!album)
          throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);
   
        return album;
    }

    async deleteAlbum(id: string) {
        const album: AlbumEntity = await this.albumRepository.findOne({where:{id}});
        if (!album)
          throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND);
        
        if (album.fotos.length === 0)
            await this.albumRepository.remove(album);
        else{
            throw new BusinessLogicException("The album has an associated photo", BusinessError.PRECONDITION_FAILED);
        }
    }
}
