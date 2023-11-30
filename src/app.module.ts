import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocialnetworkModule } from './socialnetwork/socialnetwork.module';

@Module({
  imports: [SocialnetworkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
asa