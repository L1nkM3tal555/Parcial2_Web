import { Test, TestingModule } from '@nestjs/testing';
import { RedSocialService } from './red-social.service';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { RedSocialEntity } from './red-social.entity/red-social.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('RedSocialService', () => {
 let service: RedSocialService;
 let repository: Repository<RedSocialEntity>;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig()],
     providers: [RedSocialService],
   }).compile();

   service = module.get<RedSocialService>(RedSocialService);
   repository = module.get<Repository<RedSocialEntity>>(getRepositoryToken(RedSocialEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });

});