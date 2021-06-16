import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransferencesModule } from './transferences/transferences.module';
import { DatabaseModule } from './database/database.module';
import environments from './environments';
import { configObject, configSchema } from './config';

@Module({
  imports: [
    TransferencesModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [configObject],
      isGlobal: true,
      validationSchema: configSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
