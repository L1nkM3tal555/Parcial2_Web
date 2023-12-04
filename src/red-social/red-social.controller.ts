import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { RedSocialDto } from './red-social.dto';
import { RedSocialEntity } from './red-social.entity';
import { RedSocialService } from './red-social.service';

@Controller('red-socials')
@UseInterceptors(BusinessErrorsInterceptor)
export class RedSocialController {
    constructor(private readonly redSocialService: RedSocialService) {}

  @Post()
  async create(@Body() redSocialDto: RedSocialDto) {
    const redSocial: RedSocialEntity = plainToInstance(RedSocialEntity, redSocialDto);
    return await this.redSocialService.createRedSocial(redSocial);
  }

}
