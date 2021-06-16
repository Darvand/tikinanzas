import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
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
  getAll(): GetTransferencesDto[] {
    return this.transferences;
  }
}
