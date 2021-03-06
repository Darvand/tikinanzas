import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { TransferencesController } from './transferences.controller';
import { Transference } from './transferences.entity';
import { TransferencesService } from './transferences.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transference]), UsersModule],
  controllers: [TransferencesController],
  providers: [TransferencesService],
})
export class TransferencesModule {}
