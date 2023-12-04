import { Test, TestingModule } from '@nestjs/testing';
import { FotoService } from './foto.service';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { FotoEntity } from './foto.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';
import { AlbumEntity } from 'src/album/album.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

describe('FotoService', () => {
 let service: FotoService;
 let repository: Repository<FotoEntity>;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig()],
     providers: [FotoService],
   }).compile();

   service = module.get<FotoService>(FotoService);
   repository = module.get<Repository<FotoEntity>>(getRepositoryToken(FotoEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });

 it('create should return a new foto', async () => {
  const foto: FotoEntity = {
    id: "",
    fecha: faker.date.anytime(),
    iso: faker.number.int(),
    velObturacion: faker.number.int(),
    apertura: faker.number.int(),
    usuario: new UsuarioEntity,
    album: new AlbumEntity
  }

  const newFoto: FotoEntity = await service.createFoto(foto);
  expect(newFoto).not.toBeNull();

  const storedFoto: FotoEntity = await repository.findOne({where: {id: newFoto.id}})
  expect(storedFoto).not.toBeNull();
  expect(storedFoto.fecha).toEqual(newFoto.fecha)
  expect(storedFoto.iso).toEqual(newFoto.iso)
  expect(storedFoto.velObturacion).toEqual(newFoto.velObturacion)
  expect(storedFoto.usuario).toBeInstanceOf(UsuarioEntity)
  expect(storedFoto.album).toBeInstanceOf(AlbumEntity)

  });

});