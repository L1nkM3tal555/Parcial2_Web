import { Body, Controller, Delete, Get, HttpCode, Param, Post, UseInterceptors } from '@nestjs/common';
import { AlbumService } from './album.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { AlbumEntity } from './album.entity';
import { AlbumDto } from './album.dto';
import { plainToInstance } from 'class-transformer';

@Controller('album')
@UseInterceptors(BusinessErrorsInterceptor)
export class AlbumController {
    constructor(private readonly albumService: AlbumService) {}

    @Get(':albumId')
    async findOne(@Param('albumId') albumId: string) {
        return await this.albumService.findAlbumById(albumId);
    }

    @Post()
    async create(@Body() albumDto: AlbumDto) {
        const album: AlbumEntity = plainToInstance(AlbumEntity, albumDto);
        return await this.albumService.createAlbum(album);
    }

    @Delete(':albumId')
    @HttpCode(204)
    async delete(@Param('albumId') albumId: string) {
        return await this.albumService.deleteAlbum(albumId);
    }

}

