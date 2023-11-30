import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocialnetworkModule } from './socialnetwork/socialnetwork.module';
import { AlbumEntityEntity } from './socialnetwork/album-entity.entity/album-entity.entity';
import { RedSocialEntityEntity } from './socialnetwork/red-social-entity.entity/red-social-entity.entity';
import { FotoEntityEntity } from './socialnetwork/foto-entity.entity/foto-entity.entity';
import { UsuarioEntityEntity } from './socialnetwork/usuario-entity.entity/usuario-entity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [SocialnetworkModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'socialnetworks',
      entities: [AlbumEntityEntity,RedSocialEntityEntity,FotoEntityEntity,UsuarioEntityEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
