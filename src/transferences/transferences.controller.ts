import { Controller, Get } from '@nestjs/common';
import { TransferencesService } from './transferences.service';

@Controller('transferences')
export class TransferencesController {
  constructor(private transferencesService: TransferencesService) {}

  @Get()
  getTransferences() {
    return this.transferencesService.getAll();
  }
}
