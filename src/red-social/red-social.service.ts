import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RedSocialEntity } from './red-social.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class RedSocialService {
    constructor(
        @InjectRepository(RedSocialEntity)
        private readonly redSocialRepository: Repository<RedSocialEntity>
    ){}
    
    async createRedSocial(redSocial: RedSocialEntity): Promise<RedSocialEntity> {

        if (redSocial.slogan !== '' && redSocial.slogan){

            if (redSocial.slogan.length >= 20){
                return await this.redSocialRepository.save(redSocial);
            }
            else{
                throw new BusinessLogicException("Social Network's slogan length should be at least 20 characters long", BusinessError.PRECONDITION_FAILED);
            }
        }
        else{
            throw new BusinessLogicException("Social Network's slogan should not be empty or null", BusinessError.PRECONDITION_FAILED);
        }
        
    }
    
}
