import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';
import { configObject } from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [configObject.KEY],
      useFactory: (configService: ConfigType<typeof configObject>) => {
        const { dbName, host, password, port, user } = configService.postgres;
        return {
          type: 'postgres',
          database: dbName,
          username: user,
          autoLoadEntities: true,
          host,
          password,
          port,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof configObject>) => {
        const { dbName, host, password, port, user } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [configObject.KEY],
    },
  ],
  exports: ['PG', TypeOrmModule],
})
export class DatabaseModule {}
