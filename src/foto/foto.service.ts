import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FotoEntity } from './foto.entity/foto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FotoService {
    constructor(
        @InjectRepository(FotoEntity)
        private readonly fotoRepository: Repository<FotoEntity>
    ){}

    
}
