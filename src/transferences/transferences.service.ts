import { Inject, Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { Client } from 'pg';
import { GetTransferencesDto } from './transferences.dto';
import { CATEGORIES, SOURCES } from './transferences.entity';

@Injectable()
export class TransferencesService {
  private readonly transferences: GetTransferencesDto[] = [
    {
      uuid: 'someuuid',
      amount: 100,
      category: CATEGORIES.Food,
      date: DateTime.now().toString(),
      source: SOURCES['Credit Card'],
    },
  ];

  constructor(@Inject('PG') private clientPg: Client) {}

  getAll() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM transferences', (err, res) => {
        err ? reject(err) : resolve(res.rows);
      });
    });
  }
}
