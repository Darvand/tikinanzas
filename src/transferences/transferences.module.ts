import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferencesController } from './transferences.controller';
import { Transference } from './transferences.entity';
import { TransferencesService } from './transferences.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transference])],
  controllers: [TransferencesController],
  providers: [TransferencesService],
})
export class TransferencesModule {}
