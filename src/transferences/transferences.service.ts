import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { CATEGORIES, SOURCES, Transference } from './transferences.entities';

@Injectable()
export class TransferencesService {
  private readonly transferences: Transference[] = [
    {
      uuid: 'someuuid',
      amount: 100,
      category: CATEGORIES.Food,
      date: DateTime.now(),
      source: SOURCES['Credit Card'],
    },
  ];
  getAll(): Transference[] {
    return this.transferences;
  }
}
