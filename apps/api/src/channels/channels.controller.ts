import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChannelsService } from './channels.service';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  async getAll() {
    return this.channelsService.getAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() dto: any) {
    return this.channelsService.create(dto);
  }
}
