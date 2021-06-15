import { Module } from '@nestjs/common';
import { TransferencesController } from './transferences.controller';
import { TransferencesService } from './transferences.service';

@Module({
  controllers: [TransferencesController],
  providers: [TransferencesService]
})
export class TransferencesModule {}
