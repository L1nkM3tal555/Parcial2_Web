import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        if (usuario.telefono.length === 10){
            return await this.usuarioRepository.save(usuario);
        }
        else{
            throw new BusinessLogicException("Usuario's number phone length should be 10 characters", BusinessError.PRECONDITION_FAILED);
        }
    }

    async findAllUsuarios(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find({ relations: ["redSocial", "fotos"] });
    }

    async findUsuarioById(id: string): Promise<UsuarioEntity> {
        const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id}, relations: ["redSocial", "fotos"] } );
        if (!usuario)
          throw new BusinessLogicException("The usuario with the given id was not found", BusinessError.NOT_FOUND);
   
        return usuario;
    }

    
}
