import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumEntity } from './album/album.entity';
import { RedSocialEntity } from './red-social/red-social.entity';
import { FotoEntity } from './foto/foto.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FotoModule } from './foto/foto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RedSocialModule } from './red-social/red-social.module';
import { AlbumModule } from './album/album.module';
import { AlbumFotoService } from './album-foto/album-foto.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'socialnetworks',
      entities: [AlbumEntity,RedSocialEntity,FotoEntity,UsuarioEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
    FotoModule,
    UsuarioModule,
    RedSocialModule,
    AlbumModule,],
  controllers: [AppController],
  providers: [AppService, AlbumFotoService],
})
export class AppModule {}
