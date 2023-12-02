import { Test, TestingModule } from '@nestjs/testing';
import { AlbumService } from './album.service';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { AlbumEntity } from './album.entity/album.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

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

});