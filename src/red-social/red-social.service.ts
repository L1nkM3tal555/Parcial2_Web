import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RedSocialEntity } from './red-social.entity/red-social.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RedSocialService {
    constructor(
        @InjectRepository(RedSocialEntity)
        private readonly redSocialRepository: Repository<RedSocialEntity>
    ){}

    
}
