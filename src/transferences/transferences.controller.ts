import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CheckUserPipe } from './check-user.pipe';
import { CreateTransferenceDto } from './transferences.dto';
import { TransferencesService } from './transferences.service';

@ApiTags('transferences')
@Controller('transferences')
export class TransferencesController {
  constructor(private transferencesService: TransferencesService) {}

  @Get()
  @ApiOperation({ summary: 'List of all transferences' })
  getTransferences() {
    return this.transferencesService.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a transference' })
  create(@Body(CheckUserPipe) payload: CreateTransferenceDto) {
    return this.transferencesService.create(payload);
  }
}
