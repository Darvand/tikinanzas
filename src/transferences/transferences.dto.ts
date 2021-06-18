import { ApiProperty } from '@nestjs/swagger';
import {
  CATEGORIES,
  Category,
  Source,
  SOURCES,
  Transference,
} from './transferences.entity';

export class GetTransferencesDto {
  @ApiProperty()
  readonly uuid: string;
  @ApiProperty()
  readonly amount: number;
  @ApiProperty()
  readonly source: Source;
  @ApiProperty()
  readonly date: Date;
  @ApiProperty()
  readonly category: Category;

  constructor(transference: Transference) {
    this.uuid = transference.uuid;
    this.amount = transference.amount;
    this.category = CATEGORIES[transference.category];
    this.source = SOURCES[transference.source];
    this.date = transference.date;
  }
}
