import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransferencesModule } from './transferences/transferences.module';

@Module({
  imports: [TransferencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
