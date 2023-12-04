import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { UsuarioEntity } from './usuario.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsuarioService', () => {
 let service: UsuarioService;
 let repository: Repository<UsuarioEntity>;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig()],
     providers: [UsuarioService],
   }).compile();

   service = module.get<UsuarioService>(UsuarioService);
   repository = module.get<Repository<UsuarioEntity>>(getRepositoryToken(UsuarioEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });

});