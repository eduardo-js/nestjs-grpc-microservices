import { Controller, Get, Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/api/book/:id')
  async getHello(@Param('id') id: string) {
    return await this.appService.findOne(parseInt(id, 10));
  }
}
