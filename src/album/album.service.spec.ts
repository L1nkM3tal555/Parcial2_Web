import { Test, TestingModule } from '@nestjs/testing';
import { AlbumService } from './album.service';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { AlbumEntity } from './album.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';

describe('AlbumService', () => {
 let service: AlbumService;
 let repository: Repository<AlbumEntity>;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig()],
     providers: [AlbumService],
   }).compile();

   service = module.get<AlbumService>(AlbumService);
   repository = module.get<Repository<AlbumEntity>>(getRepositoryToken(AlbumEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });
 /*
 it('create should return a new album', async () => {
  const album: AlbumEntity = {
    id: "",
    fechaInicio: faker.date.soon({days:1, refDate: '2023-02-121T00:00:00.000Z'}),
    fechaFin: faker.date.future({years:5, refDate: '2023-02-121T00:00:00.000Z'}),
    titulo: faker.company.name(),
    fotos: [],
  }

  const newAlbum: AlbumEntity = await service.createAlbum(album);
  expect(newAlbum).not.toBeNull();

  const storedAlbum: AlbumEntity = await repository.findOne({where: {id: newAlbum.id}})
  expect(storedAlbum).not.toBeNull();
  expect(storedAlbum.fechaInicio).toEqual(newAlbum.fechaInicio)
  expect(storedAlbum.fechaFin).toEqual(newAlbum.fechaFin)
  expect(storedAlbum.titulo).toEqual(newAlbum.titulo)

  });
  */
});