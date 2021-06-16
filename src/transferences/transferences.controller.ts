import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
}
